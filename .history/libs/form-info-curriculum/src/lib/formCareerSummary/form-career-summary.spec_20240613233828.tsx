import {
  render,
  screen,
  fireEvent,
  queryByLabelText,
} from '@testing-library/react';
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

    const pitchInput = screen.getByLabelText(/Pitch/i);
    fireEvent.change(pitchInput, {
      target: { value: 'This is a test pitch.' },
    });
    expect(pitchInput.value).toEqual('This is a test pitch.');

    //const highlightInputs = screen.getAllByLabelText(/Highlight/i);
    const highlightInputs = screen.getByTestId('highlight');
    console.log(highlightInputs);
    fireEvent.change(highlightInputs[0], { target: { value: 'Highlight 1' } });
    expect(highlightInputs[0].value).toEqual('Highlight 1');

    const skillInputs = screen.getAllByLabelText(/Skill/i);
    fireEvent.change(skillInputs[0], { target: { value: 'React' } });
    expect(skillInputs[0].value).toEqual('React');

    const levelSelects = screen.getAllByLabelText(/Level/i);
    fireEvent.change(levelSelects[0], { target: { value: 'Medium' } });
    expect(levelSelects[0].value).toEqual('Medium');
  });
});
