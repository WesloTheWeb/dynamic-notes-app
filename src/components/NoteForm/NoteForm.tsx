import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteFormSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './NoteForm.module.scss';

const { noteFormContainer, noteFormContainerControllers } = classes;

type FormData = {
    title: string;
    content: string;
};

const NoteForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log('data', data)
        dispatch(addNote({
            title: data.title,
            content: data.content
        }));
        reset();
    };

    return (
        <form className={noteFormContainer} onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("content", { required: "Content is required" })} placeholder="Note content" />
            {errors.content && <span>{errors.content.message}</span>}
            <div className={noteFormContainerControllers}>
                <button type="button" onClick={() => reset()}>Clear Note</button>
                <button type="submit" value="Submit Note">Submit Note</button>
            </div>
        </form>
    );
};

export default NoteForm;
