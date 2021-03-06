import React from 'react'
import { data } from '../../data'
class clientsLogo extends React.Component {
    render() {
        let clientsLogo = data.clientsLogo.filter(item => {
            return item.parentWrapper.id === this.props.clientsLogoId
        })
        return (
            <div>
                {
                    clientsLogo[0] ?
                        <div className={clientsLogo[0].parentWrapper.className}>
                            <div className={clientsLogo[0].parentWrapper.container.className}>
                                <div className={clientsLogo[0].parentWrapper.container.row.className}>
                                    <div className={clientsLogo[0].parentWrapper.container.row.col.className}>
                                        <h4 className={clientsLogo[0].parentWrapper.container.row.col.headingh4.className}>{clientsLogo[0].parentWrapper.container.row.col.headingh4.value}</h4>
                                        <ul className={clientsLogo[0].parentWrapper.container.row.col.ul.className}>
                                            {
                                                clientsLogo[0].parentWrapper.container.row.col.ul.list ?
                                                    clientsLogo[0].parentWrapper.container.row.col.ul.list.map((item, i) => {
                                                        return (
                                                            <li key={i}>
                                                                {item.li.img ? <img src={item.li.img.url} alt={item.li.img.alt} /> : null}
                                                            </li>
                                                        )
                                                    })
                                                    : null
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
export default clientsLogo;