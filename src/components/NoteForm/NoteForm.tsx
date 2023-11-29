import { useSelector, useDispatch } from "react-redux";
import { updateNote, clearNote } from "../../store/noteFormSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './NoteForm.module.scss';

const { noteFormContainer, noteFormContainerControllers } = classes;

type FormData = {
    note: string;
};

const NoteForm = () => {
    const dispatch = useDispatch();
    const noteValue = useSelector((state: RootState) => state.note.value);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        defaultValues: {
            note: noteValue
        }
    });

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log('data', data)
        dispatch(updateNote(data.note));
        reset();
    };

    const handleClear = () => {
        dispatch(clearNote());
        reset();
    }

    return (
        <form className={noteFormContainer} onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("note", { required: "This field is required" })} />
            {errors.note && <span>{errors.note.message}</span>}
            <div className={noteFormContainerControllers}>
                <button
                    type="submit"
                    value="Clear Note"
                    onClick={handleClear}>
                    Clear Note
                </button>
                <button type="submit" value="Submit Note">Submit Note</button>
            </div>
        </form>
    );
};

export default NoteForm;
