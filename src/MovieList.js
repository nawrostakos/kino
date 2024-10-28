import './MovieList.css';
import naprzod from './naprzod.jpg';

const menuItems = [
    {
        id: 1,
        title: 'Naprzód',
        time: '15:45, 18:00',
        description: 'przygodowy',
        image: naprzod,
    },
    {
        id: 2,
        title: 'Naprzód',
        time: '15:45, 18:00',
        description: 'przygodowy',
        image: naprzod,
    },
    {
        id: 3,
        title: 'Naprzód',
        time: '15:45, 18:00',
        description: 'przygodowy',
        image: naprzod,
    },
    {
        id: 4,
        title: 'Naprzód',
        time: '15:45, 18:00',
        description: 'przygodowy',
        image: naprzod,
    },
]


const Menu = () => {
    return (
        <div>
            <h1>Repertuar</h1>
            <ul style={{listStyleType: 'none', padding: 0 }}>
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name}/>
                        <div style={{position: 'relative'}}>
                           <h1 style={{margin: 0 }}>{item.name}</h1> 
                           <h2 style={{margin: '5px 0' }}>{item.time}</h2> 
                           <p style={{color: 'grey'}}>{item.description}</p>

                        </div>
                    </li>
                )

                )}

            </ul>
        </div>
    );
}

export default Menu;