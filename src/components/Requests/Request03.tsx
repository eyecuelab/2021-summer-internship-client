import React from 'react';
import Person3 from '../../assets/Person3.png'
import {
Request,
RequestHeader,
RequestXpAndBadges,
AvatarAndInfo,
NameAndButtons,
Buttons
} from './styles';

const Request03 = () => {
  return (
    <Request>
      <RequestHeader>
        <p>July 18, 2021</p>
        <RequestXpAndBadges>
          <p>100 XP</p>
          <p>2 Badges</p>
        </RequestXpAndBadges>
      </RequestHeader>
      <AvatarAndInfo>
      <img src={Person3} alt='avatar' />
        <NameAndButtons>
          <p>Doug Funny</p>
          <Buttons>
            <svg width="84" height="18" viewBox="0 0 84 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="18" rx="9" fill="#003E6A"/>
              <path d="M20.964 13L23.628 5.08H26.568L29.244 13H26.724L26.28 11.356H23.868L23.412 13H20.964ZM24.744 8.188L24.3 9.772H25.86L25.428 8.2L25.092 6.904H25.068L24.744 8.188ZM32.5916 6.88C33.2636 6.88 33.8156 6.976 34.2476 7.168C34.6876 7.36 35.0196 7.604 35.2436 7.9C35.4676 8.196 35.5956 8.508 35.6276 8.836L33.3836 9.52C33.3596 9.192 33.2916 8.948 33.1796 8.788C33.0756 8.628 32.9076 8.548 32.6756 8.548C32.3716 8.548 32.1436 8.66 31.9916 8.884C31.8476 9.108 31.7756 9.488 31.7756 10.024C31.7756 10.584 31.8596 10.964 32.0276 11.164C32.1956 11.356 32.4156 11.452 32.6876 11.452C33.1276 11.452 33.3796 11.16 33.4436 10.576L35.6156 11.26C35.5836 11.604 35.4436 11.916 35.1956 12.196C34.9556 12.476 34.6236 12.7 34.1996 12.868C33.7756 13.036 33.2756 13.12 32.6996 13.12C31.6596 13.12 30.8396 12.848 30.2396 12.304C29.6396 11.76 29.3396 10.992 29.3396 10C29.3396 9.336 29.4756 8.772 29.7476 8.308C30.0196 7.844 30.3996 7.492 30.8876 7.252C31.3756 7.004 31.9436 6.88 32.5916 6.88ZM39.4237 6.88C40.0957 6.88 40.6477 6.976 41.0797 7.168C41.5197 7.36 41.8517 7.604 42.0757 7.9C42.2997 8.196 42.4277 8.508 42.4597 8.836L40.2157 9.52C40.1917 9.192 40.1237 8.948 40.0117 8.788C39.9077 8.628 39.7397 8.548 39.5077 8.548C39.2037 8.548 38.9757 8.66 38.8237 8.884C38.6797 9.108 38.6077 9.488 38.6077 10.024C38.6077 10.584 38.6917 10.964 38.8597 11.164C39.0277 11.356 39.2477 11.452 39.5197 11.452C39.9597 11.452 40.2117 11.16 40.2757 10.576L42.4477 11.26C42.4157 11.604 42.2757 11.916 42.0277 12.196C41.7877 12.476 41.4557 12.7 41.0317 12.868C40.6077 13.036 40.1077 13.12 39.5317 13.12C38.4917 13.12 37.6717 12.848 37.0717 12.304C36.4717 11.76 36.1717 10.992 36.1717 10C36.1717 9.336 36.3077 8.772 36.5797 8.308C36.8517 7.844 37.2317 7.492 37.7197 7.252C38.2077 7.004 38.7757 6.88 39.4237 6.88ZM46.3397 13.12C45.2997 13.12 44.4837 12.848 43.8917 12.304C43.2997 11.76 43.0037 10.992 43.0037 10C43.0037 9.336 43.1397 8.772 43.4117 8.308C43.6837 7.844 44.0637 7.492 44.5517 7.252C45.0397 7.004 45.6037 6.88 46.2437 6.88C46.8997 6.88 47.4557 7.004 47.9117 7.252C48.3757 7.492 48.7277 7.828 48.9677 8.26C49.2157 8.692 49.3397 9.196 49.3397 9.772C49.3397 10.068 49.3197 10.32 49.2797 10.528H45.3317C45.3877 10.888 45.4997 11.136 45.6677 11.272C45.8437 11.4 46.0757 11.464 46.3637 11.464C46.6117 11.464 46.8077 11.412 46.9517 11.308C47.1037 11.204 47.2117 11.06 47.2757 10.876L49.2197 11.452C49.1157 11.82 48.9197 12.128 48.6317 12.376C48.3437 12.624 47.9997 12.812 47.5997 12.94C47.1997 13.06 46.7797 13.12 46.3397 13.12ZM46.2437 8.524C45.9877 8.524 45.7837 8.596 45.6317 8.74C45.4877 8.884 45.3917 9.128 45.3437 9.472H47.0477C47.0157 9.16 46.9357 8.924 46.8077 8.764C46.6877 8.604 46.4997 8.524 46.2437 8.524ZM50.2286 15.52V7H52.4246L52.4846 8.212C52.6526 7.812 52.9006 7.492 53.2286 7.252C53.5566 7.004 53.9526 6.88 54.4166 6.88C55.1526 6.88 55.7286 7.152 56.1446 7.696C56.5686 8.232 56.7806 8.992 56.7806 9.976C56.7806 10.968 56.5646 11.74 56.1326 12.292C55.7086 12.844 55.1326 13.12 54.4046 13.12C53.9726 13.12 53.6126 13.016 53.3246 12.808C53.0366 12.6 52.8126 12.324 52.6526 11.98V15.52H50.2286ZM53.4806 11.38C53.7446 11.38 53.9526 11.28 54.1046 11.08C54.2646 10.872 54.3446 10.512 54.3446 10C54.3446 9.488 54.2686 9.128 54.1166 8.92C53.9646 8.712 53.7566 8.608 53.4926 8.608C53.2286 8.608 53.0206 8.724 52.8686 8.956C52.7246 9.188 52.6526 9.536 52.6526 10C52.6526 10.44 52.7206 10.78 52.8566 11.02C53.0006 11.26 53.2086 11.38 53.4806 11.38ZM62.2766 7V8.668H60.6446V10.696C60.6446 10.976 60.7046 11.176 60.8246 11.296C60.9526 11.416 61.1406 11.476 61.3886 11.476C61.5646 11.476 61.7166 11.46 61.8446 11.428C61.9726 11.388 62.0926 11.336 62.2046 11.272L62.3606 12.688C62.1606 12.824 61.8966 12.928 61.5686 13C61.2486 13.08 60.9326 13.12 60.6206 13.12C59.8526 13.12 59.2606 12.968 58.8446 12.664C58.4286 12.352 58.2206 11.824 58.2206 11.08V8.668H57.2366V7H58.2206V5.692L60.6446 5.02V7H62.2766Z" fill="white"/>
            </svg>
            <svg width="84" height="18" viewBox="0 0 84 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="18" rx="9" fill="#003E6A"/>
              <path d="M31.368 5.08C32.608 5.08 33.552 5.424 34.2 6.112C34.848 6.8 35.172 7.776 35.172 9.04C35.172 10.304 34.848 11.28 34.2 11.968C33.552 12.656 32.608 13 31.368 13H27.732V5.08H31.368ZM31.068 11.212C31.652 11.212 32.06 11.032 32.292 10.672C32.532 10.312 32.652 9.768 32.652 9.04C32.652 8.312 32.532 7.768 32.292 7.408C32.06 7.048 31.652 6.868 31.068 6.868H30.18V11.212H31.068ZM39.2616 13.12C38.2216 13.12 37.4056 12.848 36.8136 12.304C36.2216 11.76 35.9256 10.992 35.9256 10C35.9256 9.336 36.0616 8.772 36.3336 8.308C36.6056 7.844 36.9856 7.492 37.4736 7.252C37.9616 7.004 38.5256 6.88 39.1656 6.88C39.8216 6.88 40.3776 7.004 40.8336 7.252C41.2976 7.492 41.6496 7.828 41.8896 8.26C42.1376 8.692 42.2616 9.196 42.2616 9.772C42.2616 10.068 42.2416 10.32 42.2016 10.528H38.2536C38.3096 10.888 38.4216 11.136 38.5896 11.272C38.7656 11.4 38.9976 11.464 39.2856 11.464C39.5336 11.464 39.7296 11.412 39.8736 11.308C40.0256 11.204 40.1336 11.06 40.1976 10.876L42.1416 11.452C42.0376 11.82 41.8416 12.128 41.5536 12.376C41.2656 12.624 40.9216 12.812 40.5216 12.94C40.1216 13.06 39.7016 13.12 39.2616 13.12ZM39.1656 8.524C38.9096 8.524 38.7056 8.596 38.5536 8.74C38.4096 8.884 38.3136 9.128 38.2656 9.472H39.9696C39.9376 9.16 39.8576 8.924 39.7296 8.764C39.6096 8.604 39.4216 8.524 39.1656 8.524ZM43.1505 13V7H45.3345L45.3945 8.272C45.5705 7.824 45.8345 7.48 46.1865 7.24C46.5385 7 46.9625 6.88 47.4585 6.88C48.0665 6.88 48.5465 7.06 48.8985 7.42C49.2505 7.772 49.4265 8.28 49.4265 8.944V13H47.0025V9.568C47.0025 9.24 46.9465 9.012 46.8345 8.884C46.7305 8.756 46.5785 8.692 46.3785 8.692C46.1385 8.692 45.9425 8.78 45.7905 8.956C45.6465 9.132 45.5745 9.424 45.5745 9.832V13H43.1505ZM56.7309 7L54.7749 12.64C54.5269 13.36 54.2549 13.936 53.9589 14.368C53.6629 14.8 53.3109 15.108 52.9029 15.292C52.4949 15.484 51.9989 15.58 51.4149 15.58C51.0549 15.58 50.7269 15.544 50.4309 15.472C50.1349 15.4 49.8789 15.304 49.6629 15.184L50.1189 13.612C50.2549 13.692 50.3989 13.752 50.5509 13.792C50.7109 13.832 50.9229 13.852 51.1869 13.852C51.4349 13.852 51.6269 13.82 51.7629 13.756C51.8989 13.692 51.9989 13.576 52.0629 13.408L52.1469 13.18L51.4269 11.476L49.6749 7H52.3269L53.0469 10.252L53.2989 11.584L53.5989 10.216L54.3429 7H56.7309Z" fill="white"/>
            </svg>
          </Buttons>
        </NameAndButtons>
      </AvatarAndInfo>
    </Request>
  )
}

export default Request03;