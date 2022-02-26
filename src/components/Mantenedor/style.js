import styled from "styled-components"

export const FormsContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 200px;
    width: 100%;
    gap:15px;
`

export const FormBox = styled.div`
    min-width:340px;
    padding: 15px;
    height:500px;
    background-color: #f1f1f1;
`

export const ListContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    min-height: 20px;
    background-color: white;
    gap:3px;
`

export const ListBox = styled.div`
    width: 100%;
    height:39px;
    padding: 9px;
    background-color: #dfdfdf;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const BoxName = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
`

export const ListBoxContainer = styled.div`
    background-color: transparent;
    overflow-y: scroll;
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    min-height: 20px;
    max-height: 320px;
    background-color: white;
    gap:3px;
`