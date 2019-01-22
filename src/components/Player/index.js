import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import PlayIcon from '../../assets/images/play.svg';
// import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import BackwardIcon from '../../assets/images/backward.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAQFhMVFxUXFxYVFxgQEBsVGhcZGxoXGBceHigsHR0lHhkYIjEhJSkrLi4uHR8zODMtNygtLisBCgoKDQ0NFRANFTceFx0tLSstLSsrNy0rKysrLTcrKzc3LSstKy0uKystKzcrLS03Ky4tLSsrKys3Ky0rKysrK//AABEIAN0A3AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwMECAL/xABJEAACAQMCBAQDBQMIBwcFAAABAgMABBESIQUGMUEHEyJRMmFxFCOBkaFCsfAVQ1JiosHR4SQzNGNykuIIFyVUwtLxRFOCk6P/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAiEQEBAQABAwQDAQAAAAAAAAAAAREhAgNRBBIxQQUUcRX/2gAMAwEAAhEDEQA/AKaJozRSVTCg0oNJSCoN3hLMJ4NOQ3mJjYMc56gHbI7VZEsf+s1MMlsHLZ1EIdWo/Tfr3/Cq14WrGaAIrMxkjCqu7MxYAKo9yTtV78v8rebvOV04wYxh4mkUacPIPjKkHIXYEYzmlDBzc2qw4mehMFodwRuLlNWc9CTnHfaqdJ/vrobxRsgvCr7RjASLsAABPH8IGwO+D8vpXPLmkADRmvOKUUHrNIDRRmgUmiikNUKDS5ryaWpgQ0GjNAoFapry3wF5rJ5IynqZo9MrLGhkyjZV84VxpwNWAQDULDVdvhYijhkR0jJlk6YDkhjuT0xjHXGy0obObZHj4Zdo+VcpApU4JINyjgqRkEEA9CQQKqRj/fV4+KXDzFw+ZvMJRvKPlOFIWTWmXhxgoOupN0OScKTVL8Nz50OFQnWmA3wE6hgN8s1NyNdM2yNQNQWqb33B4JfWwYOd8qVXtnLADGfwHXeta35dgGza2Ydd/TqycZUdAdgd+xrn/a7ec6+n/keo3jLPOoizdu/5UgPerCS2hRWAjtx0xqQP3OeuffIyewFNnHuDwGN5IowHRc+g+kgbsxHQjBIyuPhz3p0+q6bcz5Xu/ie70dF6vdLiIg/x8637F8KenX2+QrQxWxAdq6nyq1yaWjFBFQITQDRSgUQ8cohDfWQcZXz4sjcD4um29dLKFjEMYjCKuoKqkRqoGQFRB2AyBXMPL82i6tHPRZoSc9MB1z+ldSyxsPLOTtk+kAZDAnq2e57YNSiOeJwxwu+O+PLVSowY861KuAOh23/CubCa6V8Vmzwm9320LucDfzEwMe/auayKRSUtIKDVQtFIK9UCUGgmjNFAooozRBijFBoFACrn8M3Y8NQBioGskjHeWQ5Geh2xjpVLmrn8MwRw5BudWvGkEEETP+1jGTvj/h6ilDv4hgNYOcHBtXbD4O+YsHbuM7VQRO+QTkYwe+exq/fEPDWVww6C0k2OSctNF6s467d+tUG43O+aT4WU7w8zTj4sH57g/Wsk3HCekmB/wkt+tMRpa8r2e3u47en8j6idOe7Y3J7vIOmaUnPTdRk9fpWVuNzeWYyev7X7WMbjHTf3ptNJWvZ0+Hl+13ZudVm8UfTpWeJ2A2/urABWaJ8D8/316OZ4IpCaUnrSUUlKKCaKiM1k+l43xnS8bY98ONv7q6ovZUUKoA+NFH7Kj1EYOQMHc4+ek1ynG+nB/olT+IYV1RxqRzImknGsMRvpx6WA+vxHBHbY1KGXxa1DhF7j/dZzsceYo/PIrm9u9dKeK644Pf4AAxF7j+eX+/G1c1mrFFGKKKAAooFAogNDrg4II6ddjj3we3zqyPA3gyXF7LNIAwt4wVBA2ld9KsM9wA2D1BII3qa+LHBI7q0kkjiBkhQTK6jB8tfiUnBJOjPp6bZqigsUCgGioCiiigBVw8gMo4dbjzGVyZiMKWJPnFRjOBk56Z7fM1Twq3+RCy8NtysjDPnenAKHEzAjOfYnIPYj3pVPPOmP5Ou/Vqxa9cjVvLD2DHAB239tqohzvV+c1x54TeHfPkkajkMdEkYwR+A2+Q96oNqRCYoozRmigivOKU0H+O9ACs8ZOBua162Iug/H99VGGiigiopKBRijFCsitjB+Y/Rga6MiZW88jXgZbKMVcZVQDjfIyds9welc4N0/j3H5V0hYQ6vOQkAgxjG7rhsMDkds5H7+1Ee/FT1cH4jvnAhO2R/Ood/8K5sPeuj/ABBBHBb/AHz6Ix7jAdRkHA9v31zhikUUtJijFAZoFAFesURb/wD2eosnib+wt1BOeuZG6/gNqm/OlxoteJt0CW8qAM3VihUEL2HqB361E/8As9lfK4jvvrgz74CPg/nn8qkviJBJNa30MajVJFheh1spSQKAN8lUYKfdce1Psc3AY/T9BRXrGenf8dqVEznAJ69AW6fSrivFAr0RQBUQlWtyfn+Trb0Bh/pK7jO5kOdPzw3f5bHFVSKtHkuNvsEJx1+0dCQfjGxH177YzVVK+YkA4LeN28uT+20Ww9wSNjVBuavjj7k8CvQEI9PYh8ASJkZ9hjr7Y+tUQ1SDGTS0EUooAUmKWgmg85rNG21YhWROnaqjwTSUtBFRRRQBS4oEfofw/eK6Y4YnrkAKhdS7aSoyAwAyOvVc/Ij3rmd+h+hrpHhE2rLZbBZcb4U/d5z+8/hmiPfiIAOEcQBH80vt180YzjvvXNddO86gPwviQ2H+jynbA3BLY/SuYs0ilopK9xRl2VFBLMQABuSSQAB9SRQIK2OHWbzyxQR6dcjBF1EKupjgZY7CpRf+GXFYVD+QkhKa9ELebIAOowBhmHspJ9s1DnXGVYYIyCDlTkHBBz0xVFweG3LXF+FcR0SWjGCZSksisrQhQAyvq91O2CN8sBVt3VkkmcjrgZUDVt0IbGQf76oTlnmbi00EsLX90tsiH1Knm3TbgaI5cahjuc+nIHcU6p4mcVtHa0LWF0VX0zMdBxjHrYMo15GCp9We561lEkk8LrKW5e6lEiQglpITpjhcgnJ15yi53IGxztiscnPPBbULaxXPoQkfdQlrcAkE6CuC2/fcHeq/XmY8Suj/AC1eyR20SljDEpVXK4xCirkAsc+pj0BwRnIsrhDiJQYIuB8Ni6Bbgie/0/0pMOoDEaTpLMexNXVVDzpxK2urqWW0RVixGBhQhdgu8jINlYk7/ME1HxVkeLUocW7MbN3BIaW3hEZYafT94HYFchvT171W9VAasvk/V9gh05zmf4djq8wYwex/PORVaGrS5HIFjbnSdmm3xld5QRn1bbqPY0VJuLOW4NeBsH7lyMYX06UxhB8I+o33qh3NXtx4iPg94cg/dOPTvs5RV1N3K6mGe9US4qDzS0lGaAopM0tAgrNH06/urEDWWMbUGI16zXlxQDVC5oJpM0GiEY7H6H91dC8uSgxRnJ3MRz1O8JAHt89txXPZ6H6H9xroTlYARJp07NHpw2FwEIAGodNz+NQPnEFWS0uPOzp8m4OCARgK5Pz7b9Ovz25eXoPoP3V0rzASnDuJDO4t7kY3JA8o9W+erNc1AdKRSigkd/8AClrY4ffy27iWFtLgEZwrelhgjDAj9KIl3h1bQKlzcX89xb2YTCSRyvAzXAYbRAH7xgmrICkDIzjatPj3Ara3shMTMtzJdN5cc/pm+x+WWVnXprJ0nI/pY7164TziICJ3g827GcTzN55A3K+WjDTHhiBkAnGcYpj45xqe9k864fU2MDrhVznSud8ZJJySSSSTkmrg9LxW7lMUQnkJ9CJhgh29KAsMEgfM9h7U6z8MXh09hNIUnRnbzUZQ8bBZCjAahghkIOWAOcn2NNPLwBurbJAHmLvuR3xnG+M9amnilZvphlLsVR2Rgf6TIpLaQcKPQVGeoXNTA8868m28T28ccJFshJDJrf7thqlYsSSUUlXGCSFVqqu0M8cpjhaTzdWnEJLOzBiPSVzq36Edc1MvD3mTB+yTybHSsJwdeMkGIP2GCSoOx3XIzVmNw22lg+zl/sxL+b5luywssi4IddKkI+y6vhB2Oc0VWfHorSCwihvvNPEXLSkRYR4gdkW4zsxCj4SNQ1EZHeCYqX878jXfDw1zJNFPC8ugShmaUswLq0isNmYA5OWGds9Kh9WIKtLk0Z4amOv3/tjIkG31Gcg/LtVW1a3IozYQDYgNPkbHYuO3bp164z7CipNxNfM4RfqwwXRh2xrVDIAMbY9Ax9feqDJ71f8Aesq8MvZeoWGUgMFHxRMmMb7amUg/LNUBjGB9KkCGgCg0UARR+A7e+fw+tGKKAFZ4EyPxrCKzwoSNsUGu1FKwpKAooooUHofof3V0FyjJrggOAQyQEbDqyA7DIGck9a5+FXz4eHNrYgqudMPTYYAYeoDrsN8+9ESTjkevh/EFK4zBeDYnr5Wcn8QOo2yK5gQbD8P3V1BxhCeH8QVB6zDdKg6+ryjnfrnY/nvXL4Ow/D91FLS0goFEGaUUUgqjNa3DROkq7lGVwD0ypzv8utXXxO2SdJVBKiUh104XZ48+nI3IRxjuce4qkreAyuka41OQg+rbZq7OGEvIEiiVjGkUTAq0Tgoi4XHRSMjDY6DYjc1BUfMlilvczwxg6FYaMklgpUMu5AJ69atrlfjP2q3inRvWoUSqdyroulzsfhfJzuDhuh7tHMnLUVxDDcYTM4Z45UkEraR+y2Njp3yoG41bgg1AL6wuuGzjUTHIMlHHwsASp2/MEEbflQWbzfMg4PeCVhl5okt1ySfNRgzMmd9OgsScAb/OqcNSTmrmVLuOCNEddP3jg40eY0aowQHJ0+nOSe/TvUbFIEq1ORwTYRYIGlp/c7+YmnAHwkZYg/L5VVdWjyTIwsISP2XuN9uupO5987juBvVVKuOKW4LfoOvlBsgBRhX1kY+iNVCt/HtXQfE1B4LdHI/2abfr6gm+w92bA/4q5+cVIjGaKUikxRRmg0jCkFQeiayREY/zrGRWSPHz/SrB4Y0maHFJRCUuaKKBR/hV3+GVyv2O0LA6iQoboAEdlLe37QUg77g1SAFWp4d3ipawKSFKykksSuA8qgt7aQEyfzxiqLgkAjWZm30mc9sfAxxjvsP1rkqMbD8K62u2QghigjcyAtqVQFdDhsk+w6jsdq5Ki+EVIDFFKaQUABTry5FG8wWQRsSCEWRgsRkOAoJJA75AJApszWzwrhk93IIbaGSVz+yg1HHTLHoq+5OAKo2OB3v2O7gmlTV5Eod12BIVvUBjbPXHb86vHivOt46o8EIhEnqRTC97eGNt0kZUKpEChzpLM24GN96j4l4dcWgXLWTuvT7grckHGd1Qkj64xt1p2HLvMt7FoeK7ZIxgLMVt2wTqwgcgsdvy2+VTBIOH8zWtvYpwu7DrLGgMEttifVLrLoNJAKSEsAVYEHJBIIxTZzXaCawlcxFZLaYrgMp0srMs+lBn0HrkHSCm2NxUBSW5s5ZADNBMMo43jmAO5BzuCdt+terPi88KtGj+hg4KN64/WulmAbo2O49gaDRFAFAH0/voqgqzOTk1cPiyMgTXPQ46hMH6g7/Sqzqx+RkBtI/fz5/rjTGD8hscCip9zPEf5Duwp9XkaiRnGC0eoDOdtK9Pl7Yrn92roPmZAeF3SMPgtZAeuciLUO22CBXPDVIAmvINIaU/x/jVQjUhFKaWpVIP471kQV4NelbFWAI3+VSjkvkO74oS0QVIVbS80mdAPUqijdmxuQMAZGSKjIG9dI+EsIXhNjgaS6yt7ksZXy35AfhUtEXHgjahcG+uGfI9SxxhPf4Mk/rWJ/CewgOHa/nKhWOloYIsMcdcE7YOcHanHnTxat7WR4LONbiRThpGYrbKw2KqV3cjGNsDfqaiCeNHENWWtrErt6dMinbOcNrzvkdc9KSUTW38LuFsdrWUdfilZj06jffc/lvW/F4bcMTGm0PU7efcQkkDqdL9d9sdc1B+D+MLFQl/CrHPxxKU20HTkK4ydQVcdMEntgyi08S7OTSWktBkDJLy7NjYFHC4AI7E+9MQ7weH/CYyWbh8WcjJd5px06etjnYdMViv+Q+ByqQbWBGIJ1RM0RAzuwIbAHtkY+VYLnnuxAzPd2if1UP2hwAQQw0K2M9cdR+NaD838OvY2hivcOQyrDJqgVyDgAsy4OsdBqzv7imUVFzry43DbuW1ZiyjDRuceqJt1J+YwVPbKntTFU18WlZb5FcvrFrbBgxDMG0klSfltufx61C6KQD/AOd/zx3qwH59jsrf7FwaIxg4El1KFM0xx6n8o5C5OcaicLjABzUABr1E+GDYU4IOGAZTg5wQdiNunenAk9tz/dhtWxbB9SSSwSb/ADVsAfLGKeH8YOJhURBbjAxqZPMlIHTOT+/O+9bvAIrPi6Mr29uJcMXEYFvJGxJVGj04LRAaRj1Y2GO9eX4NYwcCnW5mtmullkePy2XzRLrEYUbhmXSjEhhjDZ6gU4R6vOPWnMEPlXSwW3Eo1+4mLaIJd8mFix9Oc7KScE5U9VNZMCCQRg7/AFyNiKQigD+OlVRQBRUl8PeWV4neC3dysao0shXGvQpUFVJBAJLDc01EbxVj+Hl4gt0QmH0TyM6u6o2X0aTvjC4XruOvzqfL4f8AAIxpe2Qtt8U8jP06nDjAOD2FZV5F4EoyLKDA7s8hGPcln+Y/MVN1WDnPjdtbcOkLTRStKkqRrGyuGaaNkGwJ9IyzE9PSe5Fc9k9Pw+VdEt4f8Bk2+yJk9Cssyg4GcjS5HQdqbLrwg4W7Exz3UYGPRrVh26FlJx+f6ipooiir+tfB7ha41tdv1yTLp+mQEGK9T+DfDCrBDdIWIKvryVGOgBGHGd9wD86aOf8AFJ/HtT3zVy5Nw64e2mwcAMjjZXjJwrqO3QgjsRimZxVC0gNIDXoGqFc7nP8AhVlXXNskXL1pBA+HkeS3kdSAyomp2THYsHUZ7rmq0YbmrK8K+SReo9w0ceFcqJJk8+PIHwxwagHI1ep5cqCVAU4JqUVj22/y+mfpQGHuPzFdRwcicNjVTND5+gfFOQYxjr9yNMaD6KBTfdcd5egZg0nChpPRIkkZQABpARDnv0po5s1j39qAw9/1rqzhV/wydDJb/Z9JIBzEYXBPwllYKQCOhIAPYmnOSzt2xqitzuPiRCPnglevSm0cg6xjqPzqRcj3yQXAn12nmJjyluFnlj1sD6wkSMWZQMAHGCwI6V09FaQqRoSJT0GlEG/sDj9K173httLlJoLaQbZDxodOQcE5G++224zTRzdzdwm8P/iU00FzHcSHNxA/mJrKghGUgFML6QhAxpx7VGc1f/P3K8SW/Fp4hoSW3DyRqR5X2iJ0ZZFUDCNpBBIPq1dM5zQNAgopTSUD/wAH5NvrzP2eNWZd9OtQwHUMTnbO+PpW7f8Ah9fwRvNcLHEBKkQ1MXd2kOAUKA5X+scdwM4NeOWOZ5YzHAfMwWRRodkyD6FDKGUFt1Grrgb5qV8+84h4orcLMpRklmZ9Ku8yFgEjA6RrICxY7nC9t6Cq8f37d8ilFIPf6/rvS1QE1L/De/htpbqaW5ji+4MYD6vWHYFiuFOSulTp2znrUPzjepjwvw14rOgcQIgI1ASyLDJp3wWQ7rnG2cHv0qCcyc78NKI0V5CkjadQaCYLhRjGQM4YjdmJ2bp3GKbmi0TDi7snTILKmuN8HVqCgIc/ENjvkDfaoJd+HfF4iVNjM2O8emZPzU/OsEXInFm6cPuR/wAShB+bEUkFjWnNdnI/3F1agnGkOGtnzqycl1KA4yOw3GN8inV+aYkwZbqzjAxnRcI05KgkaQjEBegwff5Cqrm8OeLqCzWEpUddLRufyVyaj17w6a3OJ4JYj/vEaP8AUgZpgulefIQQkF19oJypWSZk2HwaA6epjjOc7HbG9P1nzPrY7PFIcAqzFxkf042wY9yOmAwIINc3MwPcfpUj5a5uubaWHVKzwBl1xyfeLoyA2knJUgEkFSMY/CpYLQ8c+HRy20NyrJ5kDLkBhk28x06sdSPMUYPzNUewqW8/8zNdTmONwYY0WE6dJjco7OXRsZ0FiCAfx6VEKoM0v40lKKD2RvXR/hFoj4NauXXGJ3c/sr965bPtpAGa5uc9am3J/MEzWdzwSNSXvHRYWH7DO6CVX/3ZRWOR0wcg52XkOXM3HOKcwyyxWENw1kraVRPRGwByHmdiAWOAQpOFwNsgksU/hrxmMEtYkDIGBLC2/XGA/f5V0H9v4fw23ijeaGGBF0oHwgYKACVXqxyckgHcmoxceK3CEZtM2cswJRJXzjbUwIUaT0GCTv7U2/SKtWLmWEDTHxMgKFDBDONGMBdWGyo6YyQKxpd8yknT/LW+NtEwX6BdOAPkBirYPilwgYxPGuQcDy5GGVzgMwX052xse+a8ReK3DW386P8Aa6I4wAASSGAznf59MZNORHOXr7mpVCS2DXEZxtcFLebY+kGQOpO/9IGo7xbxA4q940bSSoUygt7KRX+80nT94BJ5hDY1Zz0K7U5eJXiWk6Cz4fKRG6jz50Vkcqf5pAcEAD4t/V8OcZzKfDziXCo0jtOCjVdSA+ZJLEwkVQMtNKdgUB0hY1YAswG27VQycSfma/tGt24dFFHIirLIzLbytggk6XkATURuAvc9M1Bv+7vipJEcEMhGSRFcQSPt/VEmT+ArQ5041cXVzOs17LcqkjKjH7uMgHGpIQSEBxkY+Wd60OAcLuLqeKC1RmmJGnTlSuD8ZYfCFODqPTFVBxPhVzaMEureaFjnHmIyAj3UnZh8xmtSuk/FiaGLhNwt0wclUSPVjW1xgaWT5jDMcY2zXNadKyoIpx4dbS3kyQ+Z6nb4pG26AaiWOTtgYzWvw+wmuHWKCKSSRs4RFLvgddh2Hc9qe+XuD3MN/FHLFJE8TKz61KFVPpVsd8lgFxnJNVTtw7w2llXW91HGNTA+gsoABOrVqAK/Dk9snqBvByMbdeu/bY4yPlVl898wm3thYxAxyzAeYFLei2HwxnJxqZlySBnGR8JAqsgKaJh4T28UnFbUTKGVfNkUHca0jZ0P4EZHzFXtPfIfWyuWbKgElhkgEquQR0xuB+0MVRXhLdJHxazeRgoAn3J0LkwOACT79B8yKsHmHiHE57z+S+H+Us4Uy3D5ZbdFdVKqVYHTgFDsM6myO+JUrc5n54isFDyRBi4YJGp0OTjfUSuVAJAJwe9R4cxcyOpuF4SvlddJhdpCDg5CltRz7hcYO1OHJXJNzDxYycUZJpIYBJC49cTNr0ahlRvHk7EZDMrZ6VnuvEK2j4xcpeyypBbKYocBnjE2wkkkRd2c5KqdwoB2BOaITlTnKK+ViY/KmjyZIwDgHJOqMj9kkYwRkHIOcin6LilvNlWLEYAIf1xE42IXY5Ynv7Ee1UtxrmiN+JXl7bRKIptYVXyoOVVfMYL3LLrx7mkTni4GAQhwxYAuwQE7sNOcYJLdd/UaWKuRYbH4Ag2x6XiwNOQQdJUHHYDPakm5I4ZchvMsogNJ9cIaGVQTkOMYGdthg989xVY8M8TZI9Ilt4mUDA8t2iYY6HcnP4nO2NVP3/epbSKS8VwJM+lnPnxIMfEFVl9Xf2BwcVFVzzDwg2dzc2rMrGFyoYdGX4lbboSpXbsdqbcU4cf4p9quJbgBhrxhWOtgFUKMsep2yT86bya0PIpRRRQDinzkQy/yhaGBkWUOSpdS8YIU41gEHQejEHIBJHSmM9f49qcOX+JfZLq2ucE+VIrMBuSmcOo+qkjNBvc+cae9vZpHyAreWibaUVNtCYJGNWo5HXOe9R7NWTzFyzYTXsVzFPIeH3WZnmiQsIDrw4fI9Klu53TJyCBkvE3IvBYf9Y85Lf6tTcoA6knSyAKWZSBkkDFBUAozVnvydwfVl5LtE2/no2JBbBBLIAoyD3Jx1xWW58PuDhEb+UZl1MRqPlMdx6U0htjsSST0PanIqvP8dBVtcp2cnC+DS3caO19xIiG2RQTIEbVpKgbg6dcmen+rpg4DyVbcQ4n9ls5Z5bOEKbidgFDYO6x4AwHPpXO/xNuBW34tc2MeJQx2pAThxUIF2Tz1IZsAdl0rHj+qfeiE4L4WiMCXjF3BZxDB8vzE+0sPbJOEyN/2jnsKllpzvwqwC2PArNriaQhRpDIrv7ySv6nxuegUDO4FanjDwEcQtbbjdomfuUMoG7eQw1K+B3Qlg3fG+wU00+EEcdnacS41IqsYFMUOr/7hUMw+RZmiXI3wSO9Ac78q8Uv7gJJdwXV9GmtrOHMaQwuQAUZsL1K5BIcgqTkYNRDlzlGe8VpS6wwCRYvNcF9UrsFWGJFyZHJI6YAG5IqY8Gt7iK0UM7fyhx2YJrO7JaE5eQjtq1k4/okEfDWr4nTtLd2vBeGxt5VmFjjjjzqa4IyzZHUqMZY9D5hJ3oHbkLhtxwS/4mJLc3EUEKiaeFkQohXzgcSOuQVHqUHI0g75GXqThU/GbmK9NwLHXB/osJRLi4eBHD+dKrEALqZCFGdj1G5O1BwZk/k7gksjSyTMb7iLkmQuqEYRy2SyPIsceTjIT54qOwcae6v+IcbXLJbZs+Hr2kuZMxxqoJAYetpGHUBwe1QQbjPJ/Fgbq4ubeXCeY0s0mI4jpbGpS2NQO2kKMnYAV4v+R76C0gvJRGFnKLFEGJumZ/hAj07kjBxnOCO+1XFzhDpHDuHytJJBG1ureZkm7umYJFEzE7oCHmkJyANIG5GNe/41FccWvLqX1W3Bbdyo7G6bOo49/SyD2ZARV0QOPwzyRY/ac8U8oXBh0g2iR6lHlSSjJ8whsggFdsdCGO94eR33DX4ne67N7e3PlXEkjyFHdNwsEgUksDpG4wdSj2Iy8Ge7t7K64syseI8Wk8i1AB8wK7EsyjsDj09gFjI2Na3PFnLDHw3luzXXKoWSdUIy9y4LYJOPSoLNvsFKE4xT5GflzxOmuuMW0syrHDIptRGpLBVlYEMWPVvMVMtgbCtrifLNrLzFd214rGK4iM8elzEwk0KzHI2O6SjB271WHBLSU3ltAFKyfaI0x+0HEgGD9DVteIPEEXmSxOtF8qAK5Y6QCwnbSx7ZV1/5qWch1g8J+DJ6iblu4Ekisn6KAfoTvTnw3lXhMTYW1SUjI9SK0eQe4AAyT01Z2rBFxUkHQhJQKGMSqykANsuk49JwMb5yCMdKUcVkzjTMQWA0NFMuQmFZQ2Omph6upGx6Gsqfi9qfQbSMr0AaKMLjHQDTjHX8N+9R7mDw14dfxloIltJs7PEn3ZJHwvFsMe5GMdc4rNPcJEDJdO0ajCszHQ+PjbGvbGBkDA6fXMN5n8ToBmKzVpMfzhykLNsQcE6njDb6PSGIAbKjBTUVVcQMjOjfErFTg6hlWKnB77isRr3JIXZmY5Ykkk92JyTn5nevFa1SE0opDXoUCP1pQaJev8ZryKC4uWo24jwBrS0dY7iIGOTfywV1syqxz6RKrEatgSpB2qG2nhrxJ5PLmgaHKkRu/wB7Cz7aIxIhYLq7MfTUd4Pxi5s5RNaytHIO67gjurqdmX5EEVObXxguQoWSytGxgr5ZkgAI65GSMH2GBTn6G9ZeC80iq326NVbOVaGRXDA40mMt7jqfkd6jHOfh7c8NCO2ZY2B1yxxt5KHPRmOT036AdME74e7nxo4mxHlx2iADujSMdsamYsPwwBU/8OOZp+JW0j3JgdhOFwodCsekE6j1JyTtk5z7U5nyjRsOP8L4RwaSTh1zFNIBgN8Mr3TjAd4m3VVwWCnoqYyTvUF4b4YTyxxT3NyE86MSsNJeUassCxYjJI9R7jP1qzuK+GPDLqWOfyBEyOrOsICwSqCCUZOgz0LLg9c5qNeMXNN1ZXkKQeThoA41oHZWLumoZ2zgDGQam+Bu+D/Gmt3n4FebTQM5hz0aM+pkA77HzB1yrN7U7ca5WeztruCysYru1nkExtGkaBkkBQkoR8cf3anysqQQQNQOBz2b+YTfaRK/nhw/mZJk1g5DZ98/xir05L8YLSdVj4gwgnGAZNJNu59wRnQ3uD6fY74p/BGObfEB0u4rqLhMkNzGqJru1YlYwxLRxxAALqyVMnxaSQMZqO8V58ZpJZ7KwitWlcPcuC80svqDshkIGiJyAWRMau5IzXQkPM9iwyl/ZsPlPGf/AFVH+c+PWk629h9st9FxIPtDCZdK2sY1yKWVhpMhCxgdwzexpLfBiqrzxRvZboXcFpHGh2lRQ7+cukoFllABIUFtIGACc4JpjPNNxLNZta2yJDZyLJDaxq8kYYNq1SHcu7EYLE59sb1bXD+eF/0Z3vIY4j9ovJI1aNWjtEXy7a0RRkF39LldmyrDbYVGOMcaki4ek1hf2MMk7S3t35c6rdGWVtSwJHufQraSNsle2+bwiN33OF9ccSs7+8gl0wyBo4URlQRpJh/LDdW1D1Mf2gAcYAG/BzjPCbmLh3DmltHaQSi8hNzJJOzamecoAAwyFEecAbnJOad+VuNi24ddSXt9GZJUaVJIr4vxLUx1R24iAJQFy7sc4y51Drid8p8b4bZWkML8TsmlwXmc3COzzudUjFs5b1EgE74ApcFW3PP3H5I44/s2l0zpmW0YTjOx0nBC+n0+lRttWS44zxq8klkteFPBc3AVJrmGGVZWAAXSJHOIlOFzpwTpGTtVuXXiLwiMZbiNv/8AgWmP5IDUQ4z4xLI32fhNtNcTvsrOpEf1WIHLfjpqS+IGXg3AoOW4zxLibJJfMrC3tkbJDEYZmbud8Fh6VGcaiRiB8Q4bxO9uJJ5rW4eaclz922MHGMZ6KBpAHYYq0+AeHl1JP/KHF5w91kOAWjkSMg7KyEEMR2UEIvYk9HHidzxCG4nitLBr1B6nfV9nCltLBVmJ+8fY6lwcYT5g3VVBDyLxYMAthcKxzg4EQ6E41agAeu2e2KeLXkPjrAY1qCCcNclSCOoO/wAXb+BU7i5tvISFl5avc7HMbSSLnt+wRn8a9W3OXFpGLW3LzhM6fvGMb6sn9ohQRke3UDfJFZ5VUfMnKt7ZiOW5XKSjUsisZV6gZbO6nLAZYDJ6UyEe/wDG1dENJxq7ilgnsbC3inGgs8puZVV9iRGpIkbGdIJUagCdhVOeIHArewuzbW8kjqsaFxIVeRJDnKMygDOkK2B01YqyiM5pDS0pxjpv+mPbH99B5r0DSE0VR6uHyzEDGSdhuBWOsk6+pvkTWKgWikNAqD0DVv8AgrOxtb5Fd1Mc0LgjsXjZSQOh+AfkKqAVbXgS/o4oOwNqf7M3+FKLgiucEh984wy4QHJ6MM4BzgZ+dUb49y6uIwgH4bWMEbhgfMkJDZ/Crbu59ZifGCTg4JAIJIwff3+tU944j/xGL52sB/WT/CpIK9BpCBXoL0396yeR8/0/zq7hWuIh/G9KYh/GK2Ps/wA/0/zpfs/z/T/OrqNbyxQIhWx5Hz/f/jXsWn9b9P8AOqY1PKFBjHtW39k/rfp/nXpLLPf9Pf8AGmDS0D2rZs7pomDqFOCCVbeNgDnS6/tKe4OxrMvDs49f6f51mHCuv3n9n/OplFhQ+MKpGiJwm2V9tRVtEWQQRoVUyFzvgk/WpxytzBc39ol3cXcdsshk0R26J5mlH0Fi8uvPqDdF/WqNg4Bq383+zn++rB5b5h+x2tvZmISCMvhtWjdpGYnTg+/v2zUsVMOahfQ2r3dtf3hkgHnBHEYidU9TrIAilgUydsAY9zUGt/G29APnWtrIT0Kl4tvYjLZ/Sn/i3OTXdtcW3khPNjdC+ssQG2JxgA7VXZ5MAH+0H/k+f/FSTyHPjHi7xSdWSMwW4PeFD5pB7eY5OPqADUBkcsSzEliSSSSzEk5JJO5JPepinI2f/qT/APrH/urZTw+U9blv+QD/ANVXMRAx86Cf4+VTs+Hqf+Zb/k/6qyHw7T/zB/5P+umGoBSMT+z0269elWGvh2hOPtH9g/8Avrbj8MFx/tX/APL/AK6uGv/Z"
        alt="Racionais"
      />

      <div>
        <span>Sobrevivendo no Inferno</span>
        <small>Racionais Mc`s</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Play" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{
              background: '#404040',
              borderRadius: 10,
            }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            value={100}
          />
        </ProgressSlider>
        <span>2:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{
          background: '#404040',
          borderRadius: 10,
        }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
