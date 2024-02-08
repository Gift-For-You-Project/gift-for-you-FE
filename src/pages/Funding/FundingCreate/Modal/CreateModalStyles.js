import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: rgba(255,255,255,0.15); */
    background: #00000080;
    backdrop-filter: blur(1px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 170px;
  padding: 10px 20px 20px 20px;
  position: absolute;
  background: white;
  border: 0.3px solid lightgray;
  box-shadow: 0.3px 0.3px 0.3px 0.3px lightgray;
  border-radius: 10px;
`;
export const ModalTitleXBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
export const P = styled.p`
  font-size: 13px;
  font-weight: 800;
`;
export const ModalInput = styled.input`
  width: 270px;
  height: 40px;
  background-color: #eae7de;
  border-radius: 6px;
  border: none;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const XButton = styled.button`
  width: 30px;
  font-weight: 700;
  font-size: 16px;
  color: gray;
`;
export const ModalButton = styled.button`
  width: 270px;
  height: 45px;
  background-color: gray;
  color: white;
  border-radius: 6px;
  border: none;
`