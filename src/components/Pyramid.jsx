import './Pyramid.css';
import { pyrmaid } from '../data';

function Pyramid({quesNum}) {

    return (
        <section className='pyramid-container p-[6px] lg:p-[12px]'>
            <ul className='text-left text-white'>
                {pyrmaid.map((i) => (
                <li className={`${quesNum + 1 === i.id ? 'active' : ''} grid grid-cols-12 p-[4px] text-[12px] lg:text-lg`} key={i.id}>
                    <span className='col-span-10'>{i.amount}</span>
                </li>
                ))}
            </ul>
        </section>
    )

}

export default Pyramid;