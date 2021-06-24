const {Query,User} = AV;
AV.init({
            appId: "dxufEUBxUdHnoRcpJ35FaeBP-gzGzoHsz",
            appKey: "s9dwMTP9L4DRj7CiM8MwXoGJ",
            serverURL: "https://dxufeubx.lc-cn-n1-shared.com"
});
const Data = AV.Object.extend('Data');
const data = new Data();
data.set('ip', returnCitySN['cip']);
data.set('mtype', navigator.appVersion);
data.set('time', new Date());
data.save().then((data) => {});