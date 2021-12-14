import { DataContext } from "App";
import { useContext } from "react";
import style from "./Button.module.scss";
type Props = {
    onclick: () => void;
    text: string;
};

const Button = (props: Props) => {
    const data = useContext(DataContext);
    if (data) {
        const { theme, button } = data;

        const buttonBorder = () => {
            switch (button) {
            }
        };
        return (
            <div className={style.outter}>
                <div
                    className={style.inner}
                    style={{ background: `${theme?.accent}`, boxShadow: `${theme?.accent_shadow} 0px 5px 20px` }}
                >
                    <div className={style.text}>{props.text}</div>
                </div>
            </div>
        );
    } else {
        return <div>Loading for data</div>;
    }
};

export default Button;
