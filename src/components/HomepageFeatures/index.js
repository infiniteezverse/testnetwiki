import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ZK-AMM',
    description: (
      <>
        Automated market making with commitment-based pricing. Intent stays
        invisible.
      </>
    ),
  },
  {
    title: 'Hidden Order Book',
    description: (
      <>
        Orders and activity live behind ZK-proofs. Execution without
        exposure.
      </>
    ),
  },
  {
    title: 'Private Liquidity',
    description: (
      <>
        Provide liquidity across shielded pools. Earn yield without leaking
        positions.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
