import CodeBlock from 'components/shared/code-block/code-block';
import Container from 'components/shared/container/container';
import GradientLabel from 'components/shared/gradient-label';
import Link from 'components/shared/link/link';
import ArrowIcon from 'icons/arrow-sm.inline.svg';

const snippet = {
  title: 'pgvector',
  code: `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.20;
  
  import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
  import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
  
  contract MyToken is ERC20, ERC20Permit {
      constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {}
  }`,
  text: 'Start building the future of Web3 today.',
  linkUrl: 'https://github.com/nexis-network',
};

const Integration = () => (
  <section className="integration safe-paddings mt-48 xl:mt-[124px] lg:mt-28 md:mt-20">
    <Container className="flex flex-col items-center" size="medium">
      <GradientLabel>Get Started</GradientLabel>
      <h2 className="flat-breaks sm:flat-none mt-5 text-center text-5xl font-medium leading-none tracking-extra-tight xl:text-[44px] lg:text-4xl md:mt-3 md:text-[32px]">
        Simple to use,
        <br /> scales automatically
      </h2>
      <p className="mt-3 text-center text-lg font-light leading-snug xl:text-base md:max-w-xs">
        Store more data on-chain for enhanced security & automation while lowering your operating costs
      </p>
      <div className="mt-11 w-full max-w-[716px] xl:mt-10 sm:mt-8 dark rounded-md border border-gray-new-15 pb-6 pl-5 pr-3 pt-6">
        <CodeBlock
          className="code-block text-[15px] sm:text-[13px] [&_.comment.linenumber]:!-mr-10"
          language="sql"
          isTrimmed={false}
          showLineNumbers
        >
          {snippet.code}
        </CodeBlock>
      </div>
      <p className="mt-2 text-sm font-light leading-dense tracking-extra-tight text-gray-new-60">
        <span className="mr-1.5" dangerouslySetInnerHTML={{ __html: snippet.text }} />
        <Link
          className="inline-flex items-baseline tracking-extra-tight"
          theme="green"
          to={snippet.linkUrl}
        >
          Learn more
          <ArrowIcon className="ml-1" />
          <span className="sr-only">about {snippet.title}</span>
        </Link>
      </p>
    </Container>
  </section>
);

export default Integration;
