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
    expect(pitchInput).toEqual('This is a test pitch.');

    // Test highlight fields
    const highlightInputs = screen.getAllByLabelText(/Highlight/i);
    fireEvent.change(highlightInputs[0], { target: { value: 'Highlight 1' } });
    expect(highlightInputs[0]).toBe('Highlight 1');

    // Test competency fields
    const skillInputs = screen.getAllByLabelText(/Skill/i);
    fireEvent.change(skillInputs[0], { target: { value: 'React' } });
    expect(skillInputs[0]).toEqual('React');

    const levelSelects = screen.getAllByLabelText(/Level/i);
    fireEvent.change(levelSelects[0], { target: { value: 'Medium' } });
    expect(levelSelects[0]).toEqual('Medium');
  });
});
