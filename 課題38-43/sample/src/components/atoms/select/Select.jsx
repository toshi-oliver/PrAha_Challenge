import styled from "styled-components";

export const Select = (props) => {
  return (
    <SContainer>
      <SSelect>
        <option value="Latest">Latest</option>
        <option value="Latest Week">Latest Week</option>
      </SSelect>
    </SContainer>
  )
};

const SContainer = styled.div`
`;

const SSelect = styled.select`
  border-radius: 0.375rem;
  padding: 0.5rem 0.5rem;
`;