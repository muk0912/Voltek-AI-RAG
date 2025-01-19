import { Settings24Regular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

import styles from "./SettingsButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const SettingsButton = ({ className, onClick, disabled }: Props) => {
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button icon={<Settings24Regular />} onClick={onClick} disabled={disabled}>
                {t("developerSettings")}
            </Button>
        </div>
    );
};
