export default function QuestList(props){
    return(
        <div>
            {props.quests.map((quest)=>{
                return <p key={quest.id}>{quest.title}</p>
            })}
        </div>
    )
}test