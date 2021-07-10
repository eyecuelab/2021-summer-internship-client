import { useState } from "react";
import styled from 'styled-components';

const ProposeTether =  () => {
  const [friendSelected, setFriendSelected] = useState(false);
  return (
    <ProposeButton onClick={() => setFriendSelected(!friendSelected)}>
      {
        friendSelected === false &&
        <svg width="153" height="22" viewBox="0 0 153 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="153" height="22" rx="11" fill="#00B2FF"/>
          <path d="M35.668 7.08C36.684 7.08 37.472 7.316 38.032 7.788C38.592 8.26 38.872 8.932 38.872 9.804C38.872 10.676 38.592 11.348 38.032 11.82C37.472 12.292 36.684 12.528 35.668 12.528H34.18V15H31.732V7.08H35.668ZM35.272 10.752C35.64 10.752 35.92 10.676 36.112 10.524C36.312 10.364 36.412 10.124 36.412 9.804C36.412 9.484 36.312 9.248 36.112 9.096C35.92 8.936 35.64 8.856 35.272 8.856H34.18V10.752H35.272ZM39.8497 15V9H42.0217L42.0937 10.404C42.2297 9.932 42.4417 9.56 42.7297 9.288C43.0257 9.016 43.4097 8.88 43.8817 8.88C44.0497 8.88 44.1817 8.896 44.2777 8.928C44.3817 8.952 44.4617 8.984 44.5177 9.024L44.3017 10.992C44.2217 10.96 44.1177 10.932 43.9897 10.908C43.8617 10.884 43.7137 10.872 43.5457 10.872C43.1857 10.872 42.8817 10.972 42.6337 11.172C42.3937 11.364 42.2737 11.656 42.2737 12.048V15H39.8497ZM48.0528 8.88C48.7008 8.88 49.2688 9.004 49.7568 9.252C50.2528 9.492 50.6368 9.848 50.9088 10.32C51.1808 10.784 51.3168 11.344 51.3168 12C51.3168 12.656 51.1808 13.22 50.9088 13.692C50.6368 14.156 50.2528 14.512 49.7568 14.76C49.2688 15 48.7008 15.12 48.0528 15.12C47.4048 15.12 46.8368 15 46.3488 14.76C45.8608 14.512 45.4768 14.156 45.1968 13.692C44.9248 13.22 44.7888 12.656 44.7888 12C44.7888 11.344 44.9248 10.784 45.1968 10.32C45.4768 9.848 45.8608 9.492 46.3488 9.252C46.8368 9.004 47.4048 8.88 48.0528 8.88ZM48.0528 10.548C47.7888 10.548 47.5848 10.656 47.4408 10.872C47.2968 11.08 47.2248 11.456 47.2248 12C47.2248 12.544 47.2968 12.924 47.4408 13.14C47.5848 13.348 47.7888 13.452 48.0528 13.452C48.3168 13.452 48.5208 13.348 48.6648 13.14C48.8088 12.924 48.8808 12.544 48.8808 12C48.8808 11.456 48.8088 11.08 48.6648 10.872C48.5208 10.656 48.3168 10.548 48.0528 10.548ZM52.2247 17.52V9H54.4207L54.4807 10.212C54.6487 9.812 54.8967 9.492 55.2247 9.252C55.5527 9.004 55.9487 8.88 56.4127 8.88C57.1487 8.88 57.7247 9.152 58.1407 9.696C58.5647 10.232 58.7767 10.992 58.7767 11.976C58.7767 12.968 58.5607 13.74 58.1287 14.292C57.7047 14.844 57.1287 15.12 56.4007 15.12C55.9687 15.12 55.6087 15.016 55.3207 14.808C55.0327 14.6 54.8087 14.324 54.6487 13.98V17.52H52.2247ZM55.4767 13.38C55.7407 13.38 55.9487 13.28 56.1007 13.08C56.2607 12.872 56.3407 12.512 56.3407 12C56.3407 11.488 56.2647 11.128 56.1127 10.92C55.9607 10.712 55.7527 10.608 55.4887 10.608C55.2247 10.608 55.0167 10.724 54.8647 10.956C54.7207 11.188 54.6487 11.536 54.6487 12C54.6487 12.44 54.7167 12.78 54.8527 13.02C54.9967 13.26 55.2047 13.38 55.4767 13.38ZM62.7482 8.88C63.3962 8.88 63.9642 9.004 64.4522 9.252C64.9482 9.492 65.3322 9.848 65.6042 10.32C65.8762 10.784 66.0122 11.344 66.0122 12C66.0122 12.656 65.8762 13.22 65.6042 13.692C65.3322 14.156 64.9482 14.512 64.4522 14.76C63.9642 15 63.3962 15.12 62.7482 15.12C62.1002 15.12 61.5322 15 61.0442 14.76C60.5562 14.512 60.1722 14.156 59.8922 13.692C59.6202 13.22 59.4842 12.656 59.4842 12C59.4842 11.344 59.6202 10.784 59.8922 10.32C60.1722 9.848 60.5562 9.492 61.0442 9.252C61.5322 9.004 62.1002 8.88 62.7482 8.88ZM62.7482 10.548C62.4842 10.548 62.2802 10.656 62.1362 10.872C61.9922 11.08 61.9202 11.456 61.9202 12C61.9202 12.544 61.9922 12.924 62.1362 13.14C62.2802 13.348 62.4842 13.452 62.7482 13.452C63.0122 13.452 63.2162 13.348 63.3602 13.14C63.5042 12.924 63.5762 12.544 63.5762 12C63.5762 11.456 63.5042 11.08 63.3602 10.872C63.2162 10.656 63.0122 10.548 62.7482 10.548ZM69.572 15.12C68.98 15.12 68.42 15.032 67.892 14.856C67.364 14.68 66.912 14.42 66.536 14.076L67.508 12.792C67.724 13.008 68 13.196 68.336 13.356C68.68 13.516 69.04 13.596 69.416 13.596C69.608 13.596 69.768 13.572 69.896 13.524C70.032 13.468 70.1 13.384 70.1 13.272C70.1 13.192 70.064 13.128 69.992 13.08C69.928 13.024 69.788 12.976 69.572 12.936L68.948 12.816C68.124 12.656 67.544 12.424 67.208 12.12C66.872 11.808 66.704 11.4 66.704 10.896C66.704 10.568 66.804 10.252 67.004 9.948C67.212 9.636 67.536 9.38 67.976 9.18C68.424 8.98 69 8.88 69.704 8.88C70.32 8.88 70.868 8.964 71.348 9.132C71.828 9.3 72.216 9.532 72.512 9.828L71.564 11.076C71.348 10.868 71.076 10.704 70.748 10.584C70.42 10.464 70.108 10.404 69.812 10.404C69.348 10.404 69.116 10.508 69.116 10.716C69.116 10.796 69.16 10.868 69.248 10.932C69.344 10.988 69.516 11.04 69.764 11.088L70.724 11.256C71.356 11.368 71.816 11.576 72.104 11.88C72.392 12.184 72.536 12.556 72.536 12.996C72.536 13.388 72.432 13.744 72.224 14.064C72.016 14.384 71.692 14.64 71.252 14.832C70.812 15.024 70.252 15.12 69.572 15.12ZM76.3788 15.12C75.3388 15.12 74.5228 14.848 73.9308 14.304C73.3388 13.76 73.0428 12.992 73.0428 12C73.0428 11.336 73.1788 10.772 73.4508 10.308C73.7228 9.844 74.1028 9.492 74.5908 9.252C75.0788 9.004 75.6428 8.88 76.2828 8.88C76.9388 8.88 77.4948 9.004 77.9508 9.252C78.4148 9.492 78.7668 9.828 79.0068 10.26C79.2548 10.692 79.3788 11.196 79.3788 11.772C79.3788 12.068 79.3588 12.32 79.3188 12.528H75.3708C75.4268 12.888 75.5388 13.136 75.7068 13.272C75.8828 13.4 76.1148 13.464 76.4028 13.464C76.6508 13.464 76.8468 13.412 76.9908 13.308C77.1428 13.204 77.2508 13.06 77.3148 12.876L79.2588 13.452C79.1548 13.82 78.9588 14.128 78.6708 14.376C78.3828 14.624 78.0388 14.812 77.6388 14.94C77.2388 15.06 76.8188 15.12 76.3788 15.12ZM76.2828 10.524C76.0268 10.524 75.8228 10.596 75.6708 10.74C75.5268 10.884 75.4308 11.128 75.3828 11.472H77.0868C77.0548 11.16 76.9748 10.924 76.8468 10.764C76.7268 10.604 76.5388 10.524 76.2828 10.524ZM90.5026 7.08V8.916H87.9826V15H85.5346V8.916H82.9906V7.08H90.5026ZM93.4061 15.12C92.3661 15.12 91.5501 14.848 90.9581 14.304C90.3661 13.76 90.0701 12.992 90.0701 12C90.0701 11.336 90.2061 10.772 90.4781 10.308C90.7501 9.844 91.1301 9.492 91.6181 9.252C92.1061 9.004 92.6701 8.88 93.3101 8.88C93.9661 8.88 94.5221 9.004 94.9781 9.252C95.4421 9.492 95.7941 9.828 96.0341 10.26C96.2821 10.692 96.4061 11.196 96.4061 11.772C96.4061 12.068 96.3861 12.32 96.3461 12.528H92.3981C92.4541 12.888 92.5661 13.136 92.7341 13.272C92.9101 13.4 93.1421 13.464 93.4301 13.464C93.6781 13.464 93.8741 13.412 94.0181 13.308C94.1701 13.204 94.2781 13.06 94.3421 12.876L96.2861 13.452C96.1821 13.82 95.9861 14.128 95.6981 14.376C95.4101 14.624 95.0661 14.812 94.6661 14.94C94.2661 15.06 93.8461 15.12 93.4061 15.12ZM93.3101 10.524C93.0541 10.524 92.8501 10.596 92.6981 10.74C92.5541 10.884 92.4581 11.128 92.4101 11.472H94.1141C94.0821 11.16 94.0021 10.924 93.8741 10.764C93.7541 10.604 93.5661 10.524 93.3101 10.524ZM101.808 9V10.668H100.176V12.696C100.176 12.976 100.236 13.176 100.356 13.296C100.484 13.416 100.672 13.476 100.92 13.476C101.096 13.476 101.248 13.46 101.376 13.428C101.504 13.388 101.624 13.336 101.736 13.272L101.892 14.688C101.692 14.824 101.428 14.928 101.1 15C100.78 15.08 100.464 15.12 100.152 15.12C99.3839 15.12 98.7919 14.968 98.3759 14.664C97.9599 14.352 97.7519 13.824 97.7519 13.08V10.668H96.7679V9H97.7519V7.692L100.176 7.02V9H101.808ZM102.768 15V6.528H105.192V10.164C105.544 9.308 106.172 8.88 107.076 8.88C107.684 8.88 108.164 9.06 108.516 9.42C108.868 9.772 109.044 10.28 109.044 10.944V15H106.62V11.592C106.62 11.248 106.564 11.012 106.452 10.884C106.348 10.756 106.2 10.692 106.008 10.692C105.768 10.692 105.572 10.784 105.42 10.968C105.268 11.152 105.192 11.444 105.192 11.844V15H102.768ZM113.281 15.12C112.241 15.12 111.425 14.848 110.833 14.304C110.241 13.76 109.945 12.992 109.945 12C109.945 11.336 110.081 10.772 110.353 10.308C110.625 9.844 111.005 9.492 111.493 9.252C111.981 9.004 112.545 8.88 113.185 8.88C113.841 8.88 114.397 9.004 114.853 9.252C115.317 9.492 115.669 9.828 115.909 10.26C116.157 10.692 116.281 11.196 116.281 11.772C116.281 12.068 116.261 12.32 116.221 12.528H112.273C112.329 12.888 112.441 13.136 112.609 13.272C112.785 13.4 113.017 13.464 113.305 13.464C113.553 13.464 113.749 13.412 113.893 13.308C114.045 13.204 114.153 13.06 114.217 12.876L116.161 13.452C116.057 13.82 115.861 14.128 115.573 14.376C115.285 14.624 114.941 14.812 114.541 14.94C114.141 15.06 113.721 15.12 113.281 15.12ZM113.185 10.524C112.929 10.524 112.725 10.596 112.573 10.74C112.429 10.884 112.333 11.128 112.285 11.472H113.989C113.957 11.16 113.877 10.924 113.749 10.764C113.629 10.604 113.441 10.524 113.185 10.524ZM117.17 15V9H119.342L119.414 10.404C119.55 9.932 119.762 9.56 120.05 9.288C120.346 9.016 120.73 8.88 121.202 8.88C121.37 8.88 121.502 8.896 121.598 8.928C121.702 8.952 121.782 8.984 121.838 9.024L121.622 10.992C121.542 10.96 121.438 10.932 121.31 10.908C121.182 10.884 121.034 10.872 120.866 10.872C120.506 10.872 120.202 10.972 119.954 11.172C119.714 11.364 119.594 11.656 119.594 12.048V15H117.17Z" fill="white"/>
        </svg>
      }
      {
        friendSelected === true &&
        <svg width="153" height="22" viewBox="0 0 153 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="153" height="22" rx="11" fill="#73AC2B"/>
          <path d="M54.02 6.96C55.492 6.96 56.672 7.372 57.56 8.196L56.492 9.768C56.132 9.464 55.748 9.228 55.34 9.06C54.94 8.884 54.496 8.796 54.008 8.796C53.632 8.796 53.364 8.848 53.204 8.952C53.052 9.056 52.976 9.188 52.976 9.348C52.976 9.476 53.052 9.58 53.204 9.66C53.356 9.74 53.576 9.812 53.864 9.876L55.064 10.152C55.864 10.336 56.46 10.608 56.852 10.968C57.244 11.32 57.44 11.804 57.44 12.42C57.44 13.02 57.288 13.52 56.984 13.92C56.688 14.32 56.28 14.62 55.76 14.82C55.24 15.02 54.652 15.12 53.996 15.12C53.212 15.12 52.468 15.004 51.764 14.772C51.068 14.54 50.504 14.22 50.072 13.812L51.128 12.192C51.344 12.4 51.608 12.588 51.92 12.756C52.232 12.916 52.564 13.044 52.916 13.14C53.268 13.236 53.608 13.284 53.936 13.284C54.28 13.284 54.528 13.236 54.68 13.14C54.84 13.044 54.92 12.912 54.92 12.744C54.92 12.608 54.868 12.5 54.764 12.42C54.66 12.332 54.464 12.256 54.176 12.192L52.856 11.892C52.424 11.796 52.024 11.664 51.656 11.496C51.288 11.328 50.992 11.096 50.768 10.8C50.552 10.496 50.444 10.1 50.444 9.612C50.444 9.092 50.584 8.636 50.864 8.244C51.144 7.844 51.552 7.532 52.088 7.308C52.624 7.076 53.268 6.96 54.02 6.96ZM61.4295 15.12C60.3895 15.12 59.5735 14.848 58.9815 14.304C58.3895 13.76 58.0935 12.992 58.0935 12C58.0935 11.336 58.2295 10.772 58.5015 10.308C58.7735 9.844 59.1535 9.492 59.6415 9.252C60.1295 9.004 60.6935 8.88 61.3335 8.88C61.9895 8.88 62.5455 9.004 63.0015 9.252C63.4655 9.492 63.8175 9.828 64.0575 10.26C64.3055 10.692 64.4295 11.196 64.4295 11.772C64.4295 12.068 64.4095 12.32 64.3695 12.528H60.4215C60.4775 12.888 60.5895 13.136 60.7575 13.272C60.9335 13.4 61.1655 13.464 61.4535 13.464C61.7015 13.464 61.8975 13.412 62.0415 13.308C62.1935 13.204 62.3015 13.06 62.3655 12.876L64.3095 13.452C64.2055 13.82 64.0095 14.128 63.7215 14.376C63.4335 14.624 63.0895 14.812 62.6895 14.94C62.2895 15.06 61.8695 15.12 61.4295 15.12ZM61.3335 10.524C61.0775 10.524 60.8735 10.596 60.7215 10.74C60.5775 10.884 60.4815 11.128 60.4335 11.472H62.1375C62.1055 11.16 62.0255 10.924 61.8975 10.764C61.7775 10.604 61.5895 10.524 61.3335 10.524ZM67.7305 6.528V12.768C67.7305 13.024 67.7705 13.208 67.8505 13.32C67.9305 13.432 68.0705 13.488 68.2705 13.488C68.3745 13.488 68.4625 13.484 68.5345 13.476C68.6065 13.46 68.6865 13.436 68.7745 13.404L68.6425 14.772C68.4985 14.876 68.2945 14.96 68.0305 15.024C67.7745 15.088 67.5185 15.12 67.2625 15.12C66.5665 15.12 66.0665 14.964 65.7625 14.652C65.4585 14.34 65.3065 13.828 65.3065 13.116V6.528H67.7305ZM72.3983 15.12C71.3583 15.12 70.5423 14.848 69.9503 14.304C69.3583 13.76 69.0623 12.992 69.0623 12C69.0623 11.336 69.1983 10.772 69.4703 10.308C69.7423 9.844 70.1223 9.492 70.6103 9.252C71.0983 9.004 71.6623 8.88 72.3023 8.88C72.9583 8.88 73.5143 9.004 73.9703 9.252C74.4343 9.492 74.7863 9.828 75.0263 10.26C75.2743 10.692 75.3983 11.196 75.3983 11.772C75.3983 12.068 75.3783 12.32 75.3383 12.528H71.3903C71.4463 12.888 71.5583 13.136 71.7263 13.272C71.9023 13.4 72.1343 13.464 72.4223 13.464C72.6703 13.464 72.8663 13.412 73.0103 13.308C73.1623 13.204 73.2703 13.06 73.3343 12.876L75.2783 13.452C75.1743 13.82 74.9783 14.128 74.6903 14.376C74.4023 14.624 74.0583 14.812 73.6583 14.94C73.2583 15.06 72.8383 15.12 72.3983 15.12ZM72.3023 10.524C72.0463 10.524 71.8423 10.596 71.6903 10.74C71.5463 10.884 71.4503 11.128 71.4023 11.472H73.1063C73.0743 11.16 72.9943 10.924 72.8663 10.764C72.7463 10.604 72.5583 10.524 72.3023 10.524ZM79.2752 8.88C79.9472 8.88 80.4992 8.976 80.9312 9.168C81.3712 9.36 81.7032 9.604 81.9272 9.9C82.1512 10.196 82.2792 10.508 82.3112 10.836L80.0672 11.52C80.0432 11.192 79.9752 10.948 79.8632 10.788C79.7592 10.628 79.5912 10.548 79.3592 10.548C79.0552 10.548 78.8272 10.66 78.6752 10.884C78.5312 11.108 78.4592 11.488 78.4592 12.024C78.4592 12.584 78.5432 12.964 78.7112 13.164C78.8792 13.356 79.0992 13.452 79.3712 13.452C79.8112 13.452 80.0632 13.16 80.1272 12.576L82.2992 13.26C82.2672 13.604 82.1272 13.916 81.8792 14.196C81.6392 14.476 81.3072 14.7 80.8832 14.868C80.4592 15.036 79.9592 15.12 79.3832 15.12C78.3432 15.12 77.5232 14.848 76.9232 14.304C76.3232 13.76 76.0232 12.992 76.0232 12C76.0232 11.336 76.1592 10.772 76.4312 10.308C76.7032 9.844 77.0832 9.492 77.5712 9.252C78.0592 9.004 78.6272 8.88 79.2752 8.88ZM87.6673 9V10.668H86.0353V12.696C86.0353 12.976 86.0953 13.176 86.2153 13.296C86.3433 13.416 86.5313 13.476 86.7793 13.476C86.9553 13.476 87.1073 13.46 87.2353 13.428C87.3633 13.388 87.4833 13.336 87.5953 13.272L87.7513 14.688C87.5513 14.824 87.2873 14.928 86.9593 15C86.6393 15.08 86.3233 15.12 86.0113 15.12C85.2433 15.12 84.6513 14.968 84.2353 14.664C83.8193 14.352 83.6113 13.824 83.6113 13.08V10.668H82.6273V9H83.6113V7.692L86.0353 7.02V9H87.6673ZM91.5116 15.12C90.4716 15.12 89.6556 14.848 89.0636 14.304C88.4716 13.76 88.1756 12.992 88.1756 12C88.1756 11.336 88.3116 10.772 88.5836 10.308C88.8556 9.844 89.2356 9.492 89.7236 9.252C90.2116 9.004 90.7756 8.88 91.4156 8.88C92.0716 8.88 92.6276 9.004 93.0836 9.252C93.5476 9.492 93.8996 9.828 94.1396 10.26C94.3876 10.692 94.5116 11.196 94.5116 11.772C94.5116 12.068 94.4916 12.32 94.4516 12.528H90.5036C90.5596 12.888 90.6716 13.136 90.8396 13.272C91.0156 13.4 91.2476 13.464 91.5356 13.464C91.7836 13.464 91.9796 13.412 92.1236 13.308C92.2756 13.204 92.3836 13.06 92.4476 12.876L94.3916 13.452C94.2876 13.82 94.0916 14.128 93.8036 14.376C93.5156 14.624 93.1716 14.812 92.7716 14.94C92.3716 15.06 91.9516 15.12 91.5116 15.12ZM91.4156 10.524C91.1596 10.524 90.9556 10.596 90.8036 10.74C90.6596 10.884 90.5636 11.128 90.5156 11.472H92.2196C92.1876 11.16 92.1076 10.924 91.9796 10.764C91.8596 10.604 91.6716 10.524 91.4156 10.524ZM97.5605 15.12C96.8245 15.12 96.2445 14.852 95.8205 14.316C95.4045 13.772 95.1965 13.008 95.1965 12.024C95.1965 11.024 95.4125 10.252 95.8445 9.708C96.2765 9.156 96.8605 8.88 97.5965 8.88C98.0205 8.88 98.3765 8.984 98.6645 9.192C98.9525 9.4 99.1725 9.676 99.3245 10.02V6.528H101.749V15H99.5645L99.4925 13.812C99.3245 14.212 99.0765 14.532 98.7485 14.772C98.4205 15.004 98.0245 15.12 97.5605 15.12ZM98.4965 13.392C98.7525 13.392 98.9525 13.276 99.0965 13.044C99.2485 12.812 99.3245 12.46 99.3245 11.988C99.3245 11.548 99.2525 11.212 99.1085 10.98C98.9725 10.74 98.7685 10.62 98.4965 10.62C98.2325 10.62 98.0205 10.724 97.8605 10.932C97.7085 11.132 97.6325 11.488 97.6325 12C97.6325 12.512 97.7085 12.872 97.8605 13.08C98.0125 13.288 98.2245 13.392 98.4965 13.392Z" fill="white"/>
        </svg>
        }
    </ProposeButton>
  );
};

const ProposeButton = styled.div`
  cursor: pointer;
`;

export default ProposeTether;