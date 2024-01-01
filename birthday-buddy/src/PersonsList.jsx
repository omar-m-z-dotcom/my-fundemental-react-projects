import Person from "./person"
const PersonsList = ({ people }) => {
  return (<>
    <h3>{`${people.length} Birthdays Today`}</h3>
    {people.map((person) => {
      return <Person key={person.id} {...person} />
    })}
  </>
  )
}
export default PersonsList