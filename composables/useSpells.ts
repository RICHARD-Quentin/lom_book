export type Spell = {
    id: string;
    name: string;
    color: string;
    image: string;
}

export const useSpells = () => {
  const spells = ref<Spell[]>([
    { id: '609b8b49c25e3c1b8e073cc8', name: 'Spell 1', color: '#f8d7da', image: '/spells/s1.png' },
    { id: '609b8b49c25e3c1b8e073cc9', name: 'Spell 2', color: '#f8d7da', image: '/spells/s2.png' },
    { id: '609b8b49c25e3c1b8e073cca', name: 'Spell 3', color: '#f8d7da', image: '/spells/s3.png' },
    { id: '609b8b49c25e3c1b8e073ccb', name: 'Spell 4', color: '#f8d7da', image: '/spells/s4.png' },
    { id: '609b8b49c25e3c1b8e073ccc', name: 'Spell 5', color: '#d4edda', image: '/spells/s5.png' },
    { id: '609b8b49c25e3c1b8e073ccd', name: 'Spell 6', color: '#d4edda', image: '/spells/s6.png' },
    { id: '609b8b49c25e3c1b8e073cce', name: 'Spell 7', color: '#d4edda', image: '/spells/s7.png' },
    { id: '609b8b49c25e3c1b8e073ccf', name: 'Spell 8', color: '#d4edda', image: '/spells/s8.png' },
    { id: '609b8b49c25e3c1b8e073cd0', name: 'Spell 9', color: '#d4edda', image: '/spells/s9.png' },
    { id: '609b8b49c25e3c1b8e073cd1', name: 'Spell 10', color: '#d4edda', image: '/spells/s10.png' },
    { id: '609b8b49c25e3c1b8e073cd2', name: 'Spell 11', color: '#d1ecf1', image: '/spells/s11.png' },
    { id: '609b8b49c25e3c1b8e073cd3', name: 'Spell 12', color: '#d1ecf1', image: '/spells/s12.png' },
    { id: '609b8b49c25e3c1b8e073cd4', name: 'Spell 13', color: '#d1ecf1', image: '/spells/s13.png' },
    { id: '609b8b49c25e3c1b8e073cd5', name: 'Spell 14', color: '#d1ecf1', image: '/spells/s14.png' },
    { id: '609b8b49c25e3c1b8e073cd6', name: 'Spell 15', color: '#d1ecf1', image: '/spells/s15.png' },
    { id: '609b8b49c25e3c1b8e073cd7', name: 'Spell 16', color: '#d1ecf1', image: '/spells/s16.png' },
    { id: '609b8b49c25e3c1b8e073cd8', name: 'Spell 17', color: '#d1ecf1', image: '/spells/s17.png' },
    { id: '609b8b49c25e3c1b8e073cd9', name: 'Spell 18', color: '#d1ecf1', image: '/spells/s18.png' },
    { id: '609b8b49c25e3c1b8e073cda', name: 'Spell 19', color: '#d1ecf1', image: '/spells/s19.png' },
    { id: '609b8b49c25e3c1b8e073cdb', name: 'Spell 20', color: '#d1ecf1', image: '/spells/s20.png' },
    { id: '609b8b49c25e3c1b8e073cdc', name: 'Spell 21', color: '#d1ecf1', image: '/spells/s21.png' },
    { id: '609b8b49c25e3c1b8e073cdd', name: 'Spell 22', color: '#d1ecf1', image: '/spells/s22.png' },
    { id: '609b8b49c25e3c1b8e073cde', name: 'Spell 23', color: '#d1ecf1', image: '/spells/s23.png' },
    { id: '609b8b49c25e3c1b8e073cdf', name: 'Spell 24', color: '#d1ecf1', image: '/spells/s24.png' },
    { id: '609b8b49c25e3c1b8e073ce0', name: 'Spell 25', color: '#d1ecf1', image: '/spells/s25.png' },
    { id: '609b8b49c25e3c1b8e073ce1', name: 'Spell 26', color: '#d1ecf1', image: '/spells/s26.png' },
    { id: '609b8b49c25e3c1b8e073ce2', name: 'Spell 27', color: '#d1ecf1', image: '/spells/s27.png' },
    { id: '609b8b49c25e3c1b8e073ce3', name: 'Spell 28', color: '#d1ecf1', image: '/spells/s28.png' },
    { id: '609b8b49c25e3c1b8e073ce4', name: 'Spell 29', color: '#d1ecf1', image: '/spells/s29.png' },
    { id: '609b8b49c25e3c1b8e073ce5', name: 'Spell 30', color: '#d1ecf1', image: '/spells/s30.png' },
    { id: '609b8b49c25e3c1b8e073ce6', name: 'Spell 31', color: '#d1ecf1', image: '/spells/s31.png' },
    { id: '609b8b49c25e3c1b8e073ce7', name: 'Spell 32', color: '#d1ecf1', image: '/spells/s32.png' },
    { id: '609b8b49c25e3c1b8e073ce8', name: 'Spell 33', color: '#d1ecf1', image: '/spells/s33.png' },
    { id: '609b8b49c25e3c1b8e073ce9', name: 'Spell 34', color: '#d1ecf1', image: '/spells/s34.png' },
    { id: '609b8b49c25e3c1b8e073cea', name: 'Spell 35', color: '#d1ecf1', image: '/spells/s35.png' },
    { id: '609b8b49c25e3c1b8e073ceb', name: 'Spell 36', color: '#d1ecf1', image: '/spells/s36.png' },
  ])

  return { spells };
}
