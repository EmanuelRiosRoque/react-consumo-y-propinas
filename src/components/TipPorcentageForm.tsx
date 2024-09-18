import type {Dispatch } from "react"
import type { OrderActions } from "../reducer/order-reducer"
const tipOptions = [
    {
        id: 'tip0',
        value: .0,
        label: 'Sin propina'
    },
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

type TipPorcentageFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}


export default function TipPorcentageForm({dispatch, tip} : TipPorcentageFormProps) {
    return (
        <div>
            <h3 className="text-2xl font-black">Propina</h3>
            <form action="">
                {tipOptions.map(tipOptions => (
                    <div key={tipOptions.id} className="flex gap-2">

                        <label htmlFor={tipOptions.id}>{tipOptions.label}</label>

                        <input
                            id={tipOptions.id}
                            type="radio"
                            name="tip"
                            value={tipOptions.value}
                            onChange={e => dispatch({type:'add-tip', payload: {value: +e.target.value}})}
                            checked={tipOptions.value === tip}
                        />

                    </div>
                ))}
            </form>
        </div>
    )
}
