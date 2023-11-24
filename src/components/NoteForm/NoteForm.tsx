import { useForm, SubmitHandler } from "react-hook-form";
import classes from './NoteForm.module.scss';

const { noteFormContainer, noteFormContainerControllers } = classes;

type FormData = {
    note: string;
};

const NoteForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = data => console.log(data);

    return (
        <form className={noteFormContainer} onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("note", { required: "This field is required" })} />
            {errors.note && <span>{errors.note.message}</span>}
            <div className={noteFormContainerControllers}>
                <button type="submit" value="Submit Note">Submit Note</button>
            </div>
        </form>
    );
};

export default NoteForm;
