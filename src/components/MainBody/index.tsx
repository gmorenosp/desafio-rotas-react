import { Outlet } from "react-router-dom";
import "./styles.css";

type Props = {
    content: JSX.Element;
}

export default function MainBody({ content }: Props) {
    return (
        <main>
            {content}
        </main>
    );
}