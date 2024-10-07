import React, { useState, useMemo } from 'react';
import ItemList from '../../../components/ItemList/ItemList';

interface Technologie {
  name: string;
}

const TechnologiesList: React.FC = () => {
    const [technologies] = useState<Technologie[]>([
        { name: 'Node' },
        { name: 'Express' },
        { name: 'MariaDB' },
        { name: 'MicrosoftSQL' },
        { name: 'Sequelize' },
        { name: 'React' },
        { name: 'Bootstrap' },
        { name: 'Sass' },
        { name: 'Github' },
        { name: 'Azure' },
    ]);

    const items = useMemo(
        () =>
            technologies.map((technologie) => ({
                name: technologie.name,
            })),
        [technologies]
    )

    return <ItemList items={items} title="Outils de développement"/>;
};

export default TechnologiesList;
