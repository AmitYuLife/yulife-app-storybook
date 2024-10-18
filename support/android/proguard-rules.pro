-keep class com.reactnativenavigation.views.element.animators.** { *; }

-keep class com.yulife.BuildConfig { *; }

# for mixpanel resources
-keep class **.R$* { *; }

# for expo moduless
-keep class expo.modules.** { *; }

# for fast image
-keep public class com.dylanvann.fastimage.* {*;}
-keep public class com.dylanvann.fastimage.** {*;}
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}

-keep class com.reactnativestripesdk.**
-keep class com.stripe.android.** { *; }
-keepattributes Signature

# For using GSON @Expose annotation
-keepattributes *Annotation*

-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivity$g
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter$Args
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter$Error
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningEphemeralKeyProvider

-keep class javax.lang.model.element.** { *; }
# Gson specific classes
-keep class sun.misc.Unsafe { *; }

-dontwarn javax.lang.model.element.Element
-dontwarn javax.lang.model.type.TypeMirror
-dontwarn javax.lang.model.type.TypeVisitor
-dontwarn javax.lang.model.util.SimpleTypeVisitor7
-dontwarn org.joda.convert.FromString
-dontwarn org.joda.convert.ToString

-keepclassmembers class com.android.installreferrer.api.** {
  *;
}