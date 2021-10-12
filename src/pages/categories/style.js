import styled from 'styled-components';
const theme = {
    borderHover: '#11b7de',
    background: '#032541',
    backgroundHover: '#073844',

}
const Style = styled.div`
.genreBox{
    min-width:20%;
    a{
        background:${theme.background};
        transition:background 0.3s;
        &:hover {
        background:${theme.backgroundHover};
        }
    }
}
`
export default Style;
