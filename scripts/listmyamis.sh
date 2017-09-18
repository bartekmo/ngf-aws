ver="v623-108-HF836-20170810"
#ver="v703-087-20170810"
#ver="v710-371-HF835"

echo "Listing AMI images for CudaNGF release $ver in all regions"

for reg in `aws ec2 describe-regions --output text --query 'Regions[*].{Region:RegionName}'`
  do
    echo "\"${reg//$'\r'}\": {"
    echo -n '  "PAYG": '
    paygami=`aws ec2 describe-images --filter "Name=name,Values=CudaNGFHourly-$ver*" 'Name=is-public,Values=true' --query 'Images[*].{AMI:ImageId}' --output text --region "${reg//$'\r'}"`
    echo "\"${paygami//$'\n'}\","
    echo -n '  "BYOL": '
    byolami=`aws ec2 describe-images --filter "Name=name,Values=CudaNGFBYOL-$ver*" 'Name=is-public,Values=true' --query 'Images[*].{AMI:ImageId}' --output text --region "${reg//$'\r'}"`
    echo "\"${byolami//$'\n'}\""
    echo '},'
  done
