import styled from "styled-components"

export const ScorecardStyle = styled.div`
    margin: 10px;
    border: ${props => props.authUser
            ? '3px red solid'
            : '1px black solid'
        };
    `
