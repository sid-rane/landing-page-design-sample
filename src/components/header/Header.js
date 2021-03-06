import React from 'react'
import { data } from '../../../src/data'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";




class Header extends React.Component {
    render() {
        let headerData = data.header.filter(item => {
            return item.parentWrapper.id === this.props.headerId
        })
        return (
            <div>
                {
                    headerData[0] ?
                        <div className={headerData[0].parentWrapper.className}>
                            <div className={headerData[0].parentWrapper.fluid.className}>
                                <div className={headerData[0].parentWrapper.fluid.row.className}>
                                    <div className={headerData[0].parentWrapper.fluid.row.navbar.className}>
                                        <BrowserRouter>
                                            <Switch>
                                                <Route>
                                                    <Link className={headerData[0].parentWrapper.fluid.row.navbar.link.className} to={headerData[0].parentWrapper.fluid.row.navbar.link.to}>
                                                        <img src={headerData[0].parentWrapper.fluid.row.navbar.link.img.url} alt={headerData[0].parentWrapper.fluid.row.navbar.link.img.alt} />
                                                    </Link>
                                                </Route>
                                            </Switch>
                                        </BrowserRouter>
                                        <button
                                            className={headerData[0].parentWrapper.fluid.row.navbar.button.className}
                                            type={headerData[0].parentWrapper.fluid.row.navbar.button.type}
                                            data-toggle={headerData[0].parentWrapper.fluid.row.navbar.button.dataToggle}
                                            aria-controls={headerData[0].parentWrapper.fluid.row.navbar.button.ariaControls}
                                            aria-expanded={headerData[0].parentWrapper.fluid.row.navbar.button.ariaExpanded}
                                            aria-label={headerData[0].parentWrapper.fluid.row.navbar.button.ariaLabel}>
                                            <span className={headerData[0].parentWrapper.fluid.row.navbar.button.spanText.className}></span>
                                        </button>
                                        <div className={headerData[0].parentWrapper.fluid.row.navbar.menu.className} id={headerData[0].parentWrapper.fluid.row.navbar.menu.id}>
                                            {
                                                headerData[0].parentWrapper.fluid.row.navbar.menu.button ?
                                                    headerData[0].parentWrapper.fluid.row.navbar.menu.button.map((items, i) => {
                                                        return <button className={items.btn1.className} key={i} type={items.btn1.type}>
                                                            {items.btn1.value}
                                                        </button>
                                                    })
                                                    : null
                                            }
                                        </div>
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

export default Header;

