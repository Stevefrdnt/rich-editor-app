import { Button, Space } from "antd";
import { MouseEvent, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBold,
  faUnderline,
  faItalic,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import useCustomEditor from "components/RichEditor/hooks/useCustomEditor";

import { BOLD, ITALIC, UNDERLINE } from "constants/format";
import {
  CODE_BLOCK,
  ElementKeyProps,
  HEADING,
  PARAGRAPH,
  TIPS,
  SUB_HEADING,
} from "constants/element";
import styles from "./HoverMenu.module.css";

const HoverMenu = () => {
  const { toggleFormat, toggleType, isFormatActive } = useCustomEditor();

  const handleMenuClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, key: string) => {
      if ([BOLD, ITALIC, UNDERLINE].includes(key)) {
        e.preventDefault();
        toggleFormat({ format: key });
      }
      if ([CODE_BLOCK, HEADING, PARAGRAPH, SUB_HEADING, TIPS].includes(key)) {
        e.preventDefault();
        toggleType({ type: key as ElementKeyProps });
      }
    },
    [toggleFormat, toggleType]
  );

  return (
    <div className={styles.styContainer}>
      <Space wrap>
        <Button
          icon={
            <FontAwesomeIcon
              icon={faBold}
              color={isFormatActive({ format: BOLD }) ? "#1677ff" : ""}
            />
          }
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, BOLD)
          }
          size='large'
          type={"text"}
        />
        <Button
          icon={
            <FontAwesomeIcon
              color={isFormatActive({ format: ITALIC }) ? "#1677ff" : ""}
              icon={faItalic}
            />
          }
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, ITALIC)
          }
          size='large'
          type='text'
        />
        <Button
          icon={
            <FontAwesomeIcon
              color={isFormatActive({ format: UNDERLINE }) ? "#1677ff" : ""}
              icon={faUnderline}
            />
          }
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, UNDERLINE)
          }
          size='large'
          type='text'
        />
        <Button
          size='large'
          type='text'
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, HEADING)
          }>
          <b>Title</b>
        </Button>
        <Button
          size='large'
          type='text'
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, SUB_HEADING)
          }>
          <b>SubTitle</b>
        </Button>
        <Button
          size='large'
          type='text'
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, PARAGRAPH)
          }>
          <b>Paragraph</b>
        </Button>
        <Button
          icon={<FontAwesomeIcon icon={faCode} />}
          size='large'
          type='text'
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, CODE_BLOCK)
          }
        />
        <Button
          icon={<FontAwesomeIcon icon={faLightbulb} />}
          size='large'
          type='text'
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            handleMenuClick(e, TIPS)
          }
        />
      </Space>
    </div>
  );
};

export default HoverMenu;
