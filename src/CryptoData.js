import React, { Component } from 'react';
import Data from "./Data"

class CryptoData extends Component {
    constructor(props) {
        super(props)
        this.state = { coins: [] }
    }
    fetchData = () => {
        fetch('https://api.coinmarketcap.com/v2/ticker/?limit=100')
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                const newData = Object.values(myJson.data)
                this.setState({ coins: newData })
            })
    }
    componentDidMount() {
        this.fetchData()
        setInterval(() => {
            this.fetchData()
        }, 5000)
    }
    render() {
        let DOM = Object.keys(this.state.coins).map(id => {
            let coin = this.state.coins[id]
            return <Data key={coin.id}
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                rank={coin.rank}
                price={coin.quotes.USD.price} />
        })
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="label" colspan="5">Crypto Traker</td>
                        </tr>
                        {<tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Symbol</th>
                            <th>Rank</th>
                            <th>Price</th>
                        </tr>}
                        {DOM}
                    </tbody>
                </table>
            </div >
        )
    }
}


export default CryptoData;