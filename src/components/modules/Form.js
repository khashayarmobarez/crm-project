import ItemsList from "./ItemsList"


function Form({form , setForm}) {
  return (
    <div>
      <ItemsList form={form} setForm={setForm} />
    </div>
  )
}

export default Form
