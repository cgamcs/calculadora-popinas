
function TipPercentageForm() {
  const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="" className="flex flex-col space-y-3 mt-5">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <input
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentageForm