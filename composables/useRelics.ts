type Relic = {
    id: string;
    name: string;
    type: number;
    description: string;
    image: string;
}

export enum RelicType {
    Green = 0,
    Blue = 1,
    Purple = 2,
    Yellow = 3,
    Orange = 4,
    Red = 5
}

export const useRelics = () => {

    const relics = ref<Relic[]>(
[
    { id: '609b8b49c25e3c1b8e073c80', name: 'Bonded Mask', type: RelicType.Green, description: 'Description 1', image: '/relics/rg1.png' },
    { id: '609b8b49c25e3c1b8e073c81', name: 'Arrow King Mask', type: RelicType.Green, description: 'Description 1', image: '/relics/rg2.png' },
    { id: '609b8b49c25e3c1b8e073c82', name: 'Ironclad Mask', type: RelicType.Green, description: 'Description 1', image: '/relics/rg3.png' },
    { id: '609b8b49c25e3c1b8e073c83', name: 'PriestMask', type: RelicType.Green, description: 'Description 1', image: '/relics/rg4.png' },
    { id: '609b8b49c25e3c1b8e073c84', name: 'Demon\'s Mask', type: RelicType.Green, description: 'Description 1', image: '/relics/rg5.png' },
    { id: '609b8b49c25e3c1b8e073c85', name: 'Thundercaller Kite', type: RelicType.Blue, description: 'Description 2', image: '/relics/rb1.png' },
    { id: '609b8b49c25e3c1b8e073c86', name: 'Gided Eggshell', type: RelicType.Blue, description: 'Description 2', image: '/relics/rb2.png' },
    { id: '609b8b49c25e3c1b8e073c87', name: 'Whirlwind Feather', type: RelicType.Blue, description: 'Description 2', image: '/relics/rb3.png' },
    { id: '609b8b49c25e3c1b8e073c88', name: 'Amber Snail', type: RelicType.Blue, description: 'Description 2', image: '/relics/rb4.png' },
    { id: '609b8b49c25e3c1b8e073c89', name: 'Dragonweave Circlet', type: RelicType.Blue, description: 'Description 2', image: '/relics/rb5.png' },
    { id: '609b8b49c25e3c1b8e073c8a', name: 'Arrow Bamboo', type: RelicType.Purple, description: 'Description 3', image: '/relics/rp1.png' },
    { id: '609b8b49c25e3c1b8e073c8b', name: 'Blue Snowflake', type: RelicType.Purple, description: 'Description 3', image: '/relics/rp2.png' },
    { id: '609b8b49c25e3c1b8e073c8c', name: 'Blessed Dew', type: RelicType.Purple, description: 'Description 3', image: '/relics/rp3.png' },
    { id: '609b8b49c25e3c1b8e073c8d', name: 'Magic Box', type: RelicType.Purple, description: 'Description 3', image: '/relics/rp4.png' },
    { id: '609b8b49c25e3c1b8e073c8e', name: 'Metamorphic Crystal', type: RelicType.Purple, description: 'Description 3', image: '/relics/rp5.png' },
    { id: '609b8b49c25e3c1b8e073c8f', name: 'Flame Book', type: RelicType.Yellow, description: 'Description 4', image: '/relics/ry1.png' },
    { id: '609b8b49c25e3c1b8e073c90', name: 'Beasthide Book', type: RelicType.Yellow, description: 'Description 4', image: '/relics/ry2.png' },
    { id: '609b8b49c25e3c1b8e073c91', name: 'Immunity Book', type: RelicType.Yellow, description: 'Description 4', image: '/relics/ry3.png' },
    { id: '609b8b49c25e3c1b8e073c92', name: 'Healing Book', type: RelicType.Yellow, description: 'Description 4', image: '/relics/ry4.png' },
    { id: '609b8b49c25e3c1b8e073c93', name: 'Stonewrit Tone', type: RelicType.Yellow, description: 'Description 4', image: '/relics/ry5.png' },
    { id: '609b8b49c25e3c1b8e073c94', name: 'Energy Statue', type: RelicType.Orange, description: 'Description 5', image: '/relics/ro1.png' },
    { id: '609b8b49c25e3c1b8e073c95', name: 'Cage Statue', type: RelicType.Orange, description: 'Description 5', image: '/relics/ro2.png' },
    { id: '609b8b49c25e3c1b8e073c96', name: 'Crystal Statue', type: RelicType.Orange, description: 'Description 5', image: '/relics/ro3.png' },
    { id: '609b8b49c25e3c1b8e073c97', name: 'Time Statue', type: RelicType.Orange, description: 'Description 5', image: '/relics/ro4.png' },
    { id: '609b8b49c25e3c1b8e073c98', name: 'Stellar Statue', type: RelicType.Orange, description: 'Description 5', image: '/relics/ro5.png' },
    { id: '609b8b49c25e3c1b8e073c99', name: 'Shield Necklace', type: RelicType.Red, description: 'Description 6', image: '/relics/rr1.png' },
    { id: '609b8b49c25e3c1b8e073c9a', name: 'Crimson Sickle Necklace', type: RelicType.Red, description: 'Description 6', image: '/relics/rr2.png' },
    { id: '609b8b49c25e3c1b8e073c9b', name: 'Storm Necklace', type: RelicType.Red, description: 'Description 6', image: '/relics/rr3.png' },
    { id: '609b8b49c25e3c1b8e073c9c', name: 'Spirit Necklace', type: RelicType.Red, description: 'Description 6', image: '/relics/rr4.png' },
    { id: '609b8b49c25e3c1b8e073c9d', name: 'Abyss Necklace', type: RelicType.Red, description: 'Description 6', image: '/relics/rr5.png' }
]

    );

    return { relics };
}
