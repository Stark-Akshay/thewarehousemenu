import Listsmall from '../Listsmall';
import Listsmallnew from '../Listsmallnew';
import Mainhead from '../Mainhead';
const DrinkLists = () => {
    return ( 
        <section>
        <div className="styleOut">
        <Mainhead catHead='FRESH JUICE' catDesc='[No water, No sugar, No Ice]'/>
        <Listsmall desc='Orange, Pineapple, Watermelon' price='90'/>
        <Listsmall desc='Papaya, Grape' price='90'/>
        <Listsmall desc='Mixed Fruits' price='110'/>

        <Mainhead catHead='VEGAN SHAKES'/>
        <Listsmall desc='Orange, Pineapple, Watermelon' price='90'/>
        <Listsmall desc='Papaya, Grape' price='90'/>
        <Listsmall desc='Mixed Fruits' price='110'/>

        <Mainhead catHead='LASSI'/>
        <Listsmall desc='Plain Lassi' price='90'/>
        <Listsmall desc='Pineapple, Grape, Papaya, Cardamom' price='120'/>
        <Listsmall desc='Mixed Fruits' price='140'/>

        <Mainhead catHead='MILK SHAKES'/>
        <Listsmall desc='Papaya, Banana' price='140'/>
        <Listsmall desc='Mixed Fruits' price='160'/>

        <Mainhead catHead='COFFEE'/>
        <Listsmall desc='Pressed Coffee' price='90'/>
        <Listsmall desc='Cardamom Coffee' price='150'/>
        <Listsmall desc='Iced Coffee' price='120'/>
        <Listsmall desc='Bru Coffee' price='150'/>

        <Mainhead catHead='TEAS' />
        <Listsmallnew desc='Types' price1='Cup' price2='Mug' price3='Pot'/>

        <Listsmallnew desc='Black Tea' price1='40' price2='60' price3='90'/>
        <Listsmallnew desc='Milk Tea' price1='50' price2='60' price3='--'/>
        <Listsmallnew desc='Cardomom Milk Tea' price1='60' price2='80' price3='--'/>
        <Listsmallnew desc='Masala Tea' price1='60' price2='90' price3='--'/>
        <Listsmallnew desc='Herbal Tea' price1='40' price2='60' price3='90'/>
        <Listsmallnew desc='Lemon Ginger' price1='60' price2='80' price3='110'/>
        <Listsmallnew desc='Tulsi with Ginger' price1='70' price2='90' price3='120'/>
        <Listsmallnew desc='Butterfly Pea' price1='--' price2='--' price3='120'/>
        <Listsmallnew desc='Hibiscus' price1='--' price2='--' price3='120'/>
        <Listsmallnew desc='Iced Tea' price1='--' price2='--' price3='140'/>

        <Mainhead catHead='MILK SHAKES'/>
        <Listsmall desc='Fruit Salad with Ice Cream' price='170'/>
        <Listsmall desc='Cakes of the day' price='180'/>

        </div>
      </section>
     );
}
 
export default DrinkLists;