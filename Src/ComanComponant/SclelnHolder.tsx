import React from 'react';
import {Image, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const CategorySkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          flexWrap: 'wrap',
        }}>
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
        <View style={{width: '44%', height: 160, marginBottom: 10}} />
      </View>
    </SkeletonPlaceholder>
  );
};

export const CollectionAllProductSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row-reverse',
            marginTop: 30,
          }}>
          <View style={{width: 50, height: 40}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 270, marginBottom: 10}} />
          <View style={{width: '100%', height: 270, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 200, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const WishlistSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const MyOrderDetailSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 100, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 350, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const HomeSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 200, marginBottom: 10}} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
            flexWrap: 'wrap',
          }}>
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const CategoryWithProductsImageSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
            flexWrap: 'wrap',
          }}>
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
          <View style={{width: '44%', height: 160, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const BasketSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 350, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const BilingInformationSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View style={{width: '100%', height: 150, marginBottom: 10}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{width: '100%', height: 60, marginBottom: 10}} />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const AddressSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View style={{width: '100%', height: 50, marginBottom: 10}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const EditProfilesSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: '30%',
              height: 100,
              borderRadius: 50,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <View style={{width: '100%', height: 50, marginBottom: 20}} />
          <View style={{width: '100%', height: 50, marginBottom: 20}} />
          <View style={{width: '100%', height: 50, marginBottom: 20}} />
          <View style={{width: '100%', height: 50, marginBottom: 20}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const SignInSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: '60%',
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const SignUpSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: '40%',
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};

export const ForgotPasswordSkeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={10}>
      <>
        <View
          style={{
            marginTop: '80%',
            paddingHorizontal: 20,
          }}>
          <View style={{width: '100%', height: 50, marginBottom: 30}} />
          <View
            style={{
              width: '80%',
              height: 50,
              borderRadius: 50,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          />
        </View>
      </>
    </SkeletonPlaceholder>
  );
};
