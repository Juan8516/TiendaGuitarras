import Header from "./Components/Header"
import Guitar from "./Components/Guitar"
import { useCart } from "./hooks/useCart"

function App() {

  const { data, cart, addCart, removeFromCart, increaseQuatity, decreaseQuality, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <>
    <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuatity={increaseQuatity}
      decreaseQuality={decreaseQuality}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">

          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addCart={addCart}
            />
          ))}

        </div>
    </main>

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
