import { useState } from "react";
import Cover from "../../Shared/Cover/Cover"
import shopImg from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenus from "../../Hooks/useMenus";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category); //important

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const { menus } = useMenus();

    const desserts = menus?.filter(item => item?.category === 'dessert')
    const soup = menus?.filter(item => item?.category === 'soup')
    const salad = menus?.filter(item => item?.category === 'salad')
    const drinks = menus?.filter(item => item?.category === 'drinks')
    const pizza = menus?.filter(item => item?.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover img={shopImg} titel={`Order food`} desc={`Would you like to try a dish?`} />

            <div className="text-center py-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab data={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab data={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab data={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab data={desserts} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab data={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Order