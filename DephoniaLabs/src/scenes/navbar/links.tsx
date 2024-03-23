import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (desiredPage: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const formattedLink = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return (
        <AnchorLink
            className={`${selectedPage === formattedLink ? "text-white-font" : ""}
                transition duration-500 hover:text-deep-blue
            `}
            href={`#${formattedLink}`}
            onClick={() => setSelectedPage(formattedLink)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link