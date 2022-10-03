import './App.css';

export const FavoriteItems = (props) => {
    const { favorites } = props;

    return (
        <div>
            <h1>Favorite Items:</h1>
            {
            favorites.map(({ id, name, price }) => (
                <h2 key={id}>
                    Item number {id} with the name {name} and a price of {price}$
                </h2>
            ))
        }
        </div>
    )
}