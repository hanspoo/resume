import { render, screen, fireEvent } from '@testing-library/react';
import FormCareerSummary from './form-career-summary';
import { store } from '@free-resume/redux-store';
import { Provider } from 'react-redux';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <FormCareerSummary pitch={''} highlights={[]} competencies={[]} />
    </Provider>
  );
describe('FormCareerSummary', () => {
  test('renders SummaryForm and handles input', () => {
    renderComponent();

    // Test pitch field
    const pitchInput = screen.getByLabelText(/Pitch/i);
    fireEvent.change(pitchInput, {
      target: { value: 'This is a test pitch.' },
    });
    expect(pitchInput.value).toEqual('This is a test pitch.');
  });
});
