import { useState } from "react";

export default function QuestItem(props) {
    const [title, setTitle] = useState(props.quest.title);
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.quest.status === "finished";

    return (
        <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex gap-4 items-center w-full sm:w-[80%]">
                <input
                    disabled={concluded}
                    type="checkbox"
                    checked={checked}
                    className="checkbox rounded-full border"
                    onChange={() => {
                        if (concluded) return;
                        else {
                            setChecked(!checked);
                            props.saveConcludedQuest(props.quest);
                        }
                    }}
                />

                {editMode && !concluded ? (
                    <input
                        placeholder="quest"
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-full bg-violet-200 pl-2 w-full input-sm flex focus:outline-none text-black"
                    />
                ) : (
                    <p className="wrap-break-word">
                        {props.quest.title}
                    </p>
                )}
                {!concluded && (
                    <div className="flex gap-4 w-full sm:w-fit justify-center">
                        <button
                            className="bg-indigo-400 p-2 rounded-full w-[70px]"
                            onClick={() => {
                                if (editMode) props.saveEditQuest(props.quest, title);
                                setEditMode(!editMode);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-indigo-400 p-2 rounded-full w-[70px]"
                            onClick={() => {
                                if (concluded) return;
                                else props.saveDeleteQuest(props.quest);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}