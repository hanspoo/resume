import { render } from '@testing-library/react';

import FormCareerSummary from './form-career-summary';

describe('FormCareerSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormCareerSummary />);
    expect(baseElement).toBeTruthy();
  });
});
