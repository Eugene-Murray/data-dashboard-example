export const policyTypeToString = (policyType: Number | unknown): string => {
  switch(policyType) {
        case 0:
          return 'Life Insurance';
        case 1:
          return 'Health Insurance'; 
        case 2:
          return 'Auto Insurance';
        case 3:
          return 'Home Insurance';
        default:
          return 'Unknown';
      }
}

export const policyTypeToNumber = (policyType: String | unknown): number => {
    switch(policyType) {
        case 'Life Insurance':
          return 0;
        case 'Health Insurance':
          return 1; 
        case 'Auto Insurance':
          return 2;
        case 'Home Insurance':
          return 3;
        default:
          return -1;
      }
}