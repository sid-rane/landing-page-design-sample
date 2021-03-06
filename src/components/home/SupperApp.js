import React from 'react'
import { data } from '../../data'
class SupperApp extends React.Component {
    render() {
        let superdta = data.supperApp.filter(item => {
            return item.parentWrapper.id === this.props.superId
        })
        return (
            <div>
                {
                    superdta[0] ?
                        <div className={superdta[0].parentWrapper.className}>
                            <div className={superdta[0].parentWrapper.container.className}>
                                <div className={superdta[0].parentWrapper.container.row.className}>
                                    <div className={superdta[0].parentWrapper.container.row.col12.className}>
                                        <h2 className={superdta[0].parentWrapper.container.row.col12.heading2.cla}>
                                            {superdta[0].parentWrapper.container.row.col12.heading2.value}
                                            <img src={superdta[0].parentWrapper.container.row.col12.heading2.img.url} alt={superdta[0].parentWrapper.container.row.col12.heading2.img.alt} />
                                        </h2>
                                    </div>
                                    {
                                        superdta[0].parentWrapper.container.row.col ?
                                            superdta[0].parentWrapper.container.row.col.map((item, i) => {
                                                return (
                                                    <div key={i} className={item.col4.className} data-aos={item.col4.dataAos} data-aos-duration={item.col4.dataAosDuration}>
                                                        <div className={item.col4.boxCard.className}>
                                                            <div className={item.col4.boxCard.icon.className}>
                                                                <img src={item.col4.boxCard.icon.img.url} alt={item.col4.boxCard.icon.img.alt} />
                                                            </div>
                                                            <h4>{item.col4.boxCard.headingh4.value}</h4>
                                                            <p>{item.col4.boxCard.para.value}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
export default SupperApp;