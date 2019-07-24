import styled from 'styled-components';

export const Jobcategorycard = styled.div`
background: white;
    margin-right: 1em;
    border:${props => props.showcount ? "1px solid #ffa50042" : "1px solid #80808029;" };
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: ${props => props.showcount ? "7%" : "2em"};
    padding: ${props => props.showcount ? "0.5em 1.5em 0.5em 0.8em" : "0.5em 1em" };
    box-shadow:${props => props.showcount ? "-3px 3px 0px 3px #eca72978" : "none" };
& p{
    margin-bottom:0;
    white-space: nowrap;
    &.categorytitle{
        font-weight: ${props => props.showcount ? "600" : "100" };
        margin-bottom: ${props => props.showcount ? "0.3em" : "0" };
        color: ${props => props.showcount ? "inherit" : "black" };
    }
    &.categorycount{
        font-size: smaller;
        color: #928888f2;
    }
}
`;