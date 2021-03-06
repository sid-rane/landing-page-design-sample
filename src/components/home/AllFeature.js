import React from 'react'
import { data } from '../../data'
class AllFeature extends React.Component {
    render() {
        let allFeature = data.allFeature.filter(item => {
            return item.parentWrapper.id === this.props.allFeatureId
        })
        return (
            <div>
                {
                    allFeature[0] ?
                        allFeature[0].parentWrapper.section.map((item, i) => {
                            return (
                                <div className={item.listSec.className} key={i}>
                                    <div className={item.listSec.container.className}>
                                        <div className={item.listSec.container.row.className}>
                                            {
                                                item.listSec.container.row.col ?
                                                    item.listSec.container.row.col.map((colItem, col) => {
                                                        return (
                                                            <div className={colItem.colList.className} key={col}>
                                                                <div className={colItem.colList.banner.className}>
                                                                    {
                                                                        colItem.colList.banner.box ?
                                                                            colItem.colList.banner.box.map((boxItem, box) => {
                                                                                return (
                                                                                    <div className={boxItem.boxList.className} key={box} data-aos={boxItem.boxList.dtaAos} data-aos-offset={boxItem.boxList.dataAosOffset} data-aos-easing={boxItem.boxList.dataAosEasing}>
                                                                                        {boxItem.boxList.img ? <img src={boxItem.boxList.img.url} alt={boxItem.boxList.img.alt} />:null}
                                                                                    </div>
                                                                                )
                                                                            })
                                                                            : null
                                                                    }
                                                                    {colItem.colList.banner.heading2 ? <h2 className={colItem.colList.banner.heading2.className} data-aos={colItem.colList.banner.heading2.dataAos}>
                                                                        <img src={colItem.colList.banner.heading2.img.url} alt={colItem.colList.banner.heading2.img.alt} />
                                                                        {colItem.colList.banner.heading2.value}</h2> : null}
                                                                    {colItem.colList.banner.para ? <p data-aos={colItem.colList.banner.para.dataAos}>{colItem.colList.banner.para.value}</p> : null}
                                                                    <ul>
                                                                        {
                                                                            colItem.colList.banner.ul ?
                                                                                colItem.colList.banner.ul.map((listItem, list) => {
                                                                                    return (
                                                                                        <li key={list} data-aos={listItem.list.dataAos} data-aos-duration={listItem.list.dataAosDuration}>{listItem.list.value}</li>
                                                                                    )
                                                                                })
                                                                                : null
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : null
                }
            </div>
        )
    }
}
export default AllFeature;