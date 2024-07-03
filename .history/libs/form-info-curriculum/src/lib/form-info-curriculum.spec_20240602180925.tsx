import { render } from '@testing-library/react';

import FormInfoCurriculum from './form-info-curriculum';

describe('FormInfoCurriculum', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormInfoCurriculum />);
    expect(baseElement).toBeTruthy();
  });
});
