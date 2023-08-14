import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Onboarding from '../Onboarding'; // Path to your component

// describe('Onboarding Component', () => {
//   test('renders all pages', () => {
//     const {getAllByTestId} = render(<Onboarding />);
//     const pageElements = getAllByTestId('onboarding-page');
//     expect(pageElements.length).toBe(3); // Adjust this based on your actual number of pages
//   });

// describe('Onboarding Component', () => {
//   test('displays correct content on the first page and navigates to the second page', () => {
//     const {getByText, getByTestId} = render(<Onboarding />);

//     // Check that the first page displays the desired text
//     expect(getByText('How your data will be used')).toBeTruthy();
//     expect(
//       getByText(
//         'Your data will only be shared with public health officials to help them better understand and respond to the spread of diseases in your area.',
//       ),
//     ).toBeTruthy();
//     expect(getByText('Continue')).toBeTruthy();

//     // Click on the "Continue" button
//     fireEvent.press(getByText('Continue'));

//     // Check that the transition to the second page has occurred
//     expect(getByText('How your data won’t be used')).toBeTruthy();
//   });
// });

describe('Onboarding Component', () => {
  test('displays correct content on the first page and navigates to the second page', () => {
    const {getByText, getByTestId} = render(<Onboarding />);

    // Проверяем, что на первой странице отображается нужный текст
    expect(getByText('How your data will be used')).toBeTruthy();
    expect(
      getByText(
        'Your data will only be shared with public health officials to help them better understand and respond to the spread of diseases in your area.',
      ),
    ).toBeTruthy();

    // Вызываем функцию onButtonPress, которая должна имитировать нажатие на кнопку "Continue"
    fireEvent(getByTestId('continue-button-1'), 'press');

    // Проверяем, что произошел переход на вторую страницу
    expect(getByText('How your data won’t be used')).toBeTruthy();
  });
});
