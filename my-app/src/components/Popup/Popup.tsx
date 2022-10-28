import { PositioningStrategy } from "@popperjs/core";
import { PropsWithChildren, useState } from "react";
import { PopperProps, usePopper } from "react-popper";
import styled from "styled-components";

export type PopupProps = {
  referenceElement: HTMLButtonElement | null;
  placement: PopperProps<never>["placement"];
  strategy: PositioningStrategy;
};

const StyledPopup = styled.div`
  z-index: 999;
  padding: 5px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

const Popup: React.FC<PropsWithChildren<PopupProps>> = ({
  children,
  referenceElement,
  placement,
  strategy,
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    strategy: strategy,
  });
  console.log();
  return (
    <StyledPopup
      style={styles.popper}
      ref={setPopperElement}
      {...attributes.popper}
    >
      {children}
    </StyledPopup>
  );
};

export default Popup;
