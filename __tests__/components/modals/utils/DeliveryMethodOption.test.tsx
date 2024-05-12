import DeliveryMethodOption from '@/components/modals/utils/DeliveryMethodOption';
import { render, fireEvent } from '@testing-library/react';

describe('<DeliveryMethodOption />', () => {
  it('should render option correctly', () => {
    const { getByText } = render(
      <DeliveryMethodOption
        optionName="Delivery"
        optionDescription="Nosotros te lo llevamos"
        selected={true}
        onSelect={() => {}}
      />
    );
    expect(getByText('Delivery')).toBeInTheDocument();
    expect(getByText('Nosotros te lo llevamos')).toBeInTheDocument();
  });

  it('should call onSelect when clicked', () => {
    const onSelect = jest.fn();
    const { getByLabelText } = render(
      <DeliveryMethodOption
        optionName="Delivery"
        optionDescription="Nosotros te lo llevamos"
        selected={false}
        onSelect={onSelect}
      />
    );
    const radioInput = getByLabelText('Delivery');
    fireEvent.click(radioInput);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
