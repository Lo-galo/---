import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
// import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'galo出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'galo博客',
          href: 'https://www.cnblogs.com/galo/',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: <><GithubOutlined/> galo GitHub</>,
          href: 'https://github.com/Lo-galo',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
