import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FilterBar from '@/components/FilterBar';
import SelectHubs from '@/components/SelectHubs';

describe('FilterBar', () => {
  it('should render without errors', () => {
    expect(render(<FilterBar />)).toBeTruthy();
  });
  it('should render an element with class "flex flex-col"', async () => {
    const { findAllByRole } = render(<FilterBar />);
    const divElements = await findAllByRole('generic');

    // first element(index 0) is the FilterBar Node
    expect(divElements[1].classList.contains('flex')).toBe(true);
    return expect(divElements[1].classList.contains('flex-col')).toBe(true);
  });

  it('should render an input element with type "checkbox"', async () => {
    const { findByRole } = render(<FilterBar />);

    const checkbox = await findByRole('checkbox');
    return expect(checkbox.getAttribute('type')).toBe('checkbox');
  });

  it('should toggles checkbox state when clicked', () => {
    const { getByLabelText } = render(<FilterBar />);
    const checkbox = getByLabelText('Hubs with unassigned plastic');

    expect(checkbox.toggleAttribute('checked', true)).toBeTruthy();
    expect(checkbox.toggleAttribute('checked', false)).toBeFalsy();
  });

  it('should render the child component without an error', () => {
    expect(render(<SelectHubs />)).toBeTruthy();
  });
});
