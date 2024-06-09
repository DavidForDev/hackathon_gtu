import MenuCard from "./_components/card"

// ------------ Icons -------------- //
import HomeIcon from '../../assets/icons/home'
import RocketIcon from '../../assets/icons/rocket'

const Navigation = () => {
    const menuBase = [
        {
            content: <HomeIcon />,
            href: '/'
        },  {
            content: <RocketIcon />,
            href: '/courses'
        },
    ]


    return <div className="flex m-auto items-center gap-8 bg-white/30 rounded-full p-3 px-7 w-fit">
        {menuBase.map((el, index) => (
            <MenuCard href={el.href} content={el.content} />
        ))}
    </div>
}


export default Navigation